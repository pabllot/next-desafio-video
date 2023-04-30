import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Container, Sidebarr, Filter, Button, LargeButton, Icon, CardContainer } from "./styles";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

export const Sidebar = ({ setChosenVideo, toggleTheme, theme, data, speed, setSpeed }) => {
  const [filter, setFilter] = useState("kids");
  const [filteredVids, setFilteredVids] = useState([]);

  // vai filtrar todos os videos do db e retornar somente os que tem o mesmo genero,
  useEffect(() => {
    setFilteredVids([]);
    data.map((video) => {
      if (video.genre === filter) setFilteredVids((prev) => [...prev, video]);
    });
  }, [filter]);

  return (
    <Container>
      <Sidebarr>
        <Filter>
          <Button onClick={() => setFilter("kids")}>Movies</Button>
          <LargeButton onClick={() => setFilter("office")}>The Office</LargeButton>
          {/*<Icon onClick={toggleTheme}>{theme.title === 'light' ? <IoMdMoon/> : <BsSunFill/>}</Icon>*/}
        </Filter>
        <CardContainer>
          {filteredVids.slice(0, 7).map((item) => (
            <Card
              speed={speed}
              setSpeed={setSpeed}
              theme={theme}
              setChosenVideo={setChosenVideo}
              url={item.url}
              key={item.id}
              name={item.name}
              author={item.author}
              views={item.views}
              img={item.img}
              alt={item.alt}
            />
          ))}
        </CardContainer>
      </Sidebarr>
    </Container>
  );
};
