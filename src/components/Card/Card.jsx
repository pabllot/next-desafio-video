import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import {
  Container,
  Left,
  Right,
  Title,
  Author,
  Views,
  Star,
  ImageContainer,
} from "./styles";

export const Card = ({
  name,
  author,
  views,
  img,
  url,
  setChosenVideo,
  alt,
  setSpeed,
  id,
  arrayFav,
  setArrayFav,
}) => {
  const ChooseNewVideo = (url) => {
    setChosenVideo(url);
    setSpeed(1);
  };

  const setFavorite = (e, id) => {
    e.stopPropagation();
    if (arrayFav.includes(id)) {
      setArrayFav(arrayFav.filter((favId) => favId !== id));
      return;
    }
    setArrayFav([...arrayFav, id]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteVideos", JSON.stringify(arrayFav));
  }, [arrayFav]);

  function isIdInArrayFav(id, arrayFav) {
    return arrayFav.includes(id);
  }

  return (
    <Container onClick={() => ChooseNewVideo(url)}>
      <ImageContainer>
        <Left src={img} alt={alt} />
      </ImageContainer>
      <Right>
        <Title>{name}</Title>
        <div>
          <Author>{author}</Author>
          <Views>{views} views</Views>
        </div>
      </Right>
      <Star onClick={(e) => setFavorite(e, id)}>
        {isIdInArrayFav(id, arrayFav) ? (
          <AiFillStar />
        ) : (
          <AiOutlineStar color="gray" />
        )}
      </Star>
    </Container>
  );
};
