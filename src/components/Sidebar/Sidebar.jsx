import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";

import styles from "../../../styles/Home.module.css";
import { Card } from "../Card/Card";
import { Button, CardContainer, Container, FavEmpty, Filter, Sidebarr } from "./styles";

export const Sidebar = ({ setChosenVideo, theme, data, speed, setSpeed, chosenVideo }) => {
  const [filter, setFilter] = useState("kids");
  const [filteredVids, setFilteredVids] = useState([]);
  const initialArrayFav = JSON.parse(localStorage.getItem("favoriteVideos")) || [];
  const [arrayFav, setArrayFav] = useState(initialArrayFav);

  useEffect(() => {
    setFilteredVids([]);
    data.map((video) => {
      if (filter === "Fav") {
        const favFilter = data.filter((item) => arrayFav.includes(item.id));
        setFilteredVids(favFilter);
        return;
      }
      if (video.genre === filter) setFilteredVids((prev) => [...prev, video]);
    });
  }, [filter, arrayFav]);

  return (
    <Container>
      <Sidebarr>
        <Filter>
          <Button className={`${filter === "kids" ? styles.active : ""}`} onClick={() => setFilter("kids")}>
            Deep Stuff
          </Button>
          <Button className={`${filter === "office" ? styles.active : ""}`} onClick={() => setFilter("office")}>
            The Office
          </Button>
          <Button className={`${filter === "Fav" ? styles.active : ""}`} onClick={() => setFilter("Fav")}>
            Favorites <AiFillStar />
          </Button>
        </Filter>
        <CardContainer>
          {filter === "Fav" && arrayFav.length <= 0 && (
            <FavEmpty>
              <p>
                Your Favorite List is Empty <HiOutlineEmojiSad />
              </p>
            </FavEmpty>
          )}
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
              arrayFav={arrayFav}
              setArrayFav={setArrayFav}
              chosenVideo={chosenVideo}
            />
          ))}
        </CardContainer>
      </Sidebarr>
    </Container>
  );
};
