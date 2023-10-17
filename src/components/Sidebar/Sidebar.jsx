import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import {
  Container,
  Sidebarr,
  Filter,
  Button,
  LargeButton,
  CardContainer,
} from "./styles";

export const Sidebar = ({
  setChosenVideo,
  toggleTheme,
  theme,
  data,
  speed,
  setSpeed,
}) => {
  const [filter, setFilter] = useState("kids");
  const [filteredVids, setFilteredVids] = useState([]);

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
          <Button onClick={() => setFilter("kids")}>Random</Button>
          <LargeButton onClick={() => setFilter("office")}>
            The Office
          </LargeButton>
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
              id={item.id}
            />
          ))}
        </CardContainer>
      </Sidebarr>
    </Container>
  );
};
