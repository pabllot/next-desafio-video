import React, { useState } from "react";
import { Container, Left, Right, Title, Author, Views } from "./styles";

export const Card = ({ name, author, views, img, url, setChosenVideo, alt, setSpeed }) => {
  const ChooseNewVideo = (url) => {
    setChosenVideo(url);
    setSpeed(1);
  };

  return (
    <Container onClick={() => ChooseNewVideo(url)}>
      <Left src={img} alt={alt} />
      <Right>
        <Title>{name}</Title>
        <div>
          <Author>{author}</Author>
          <Views>{views} views</Views>
        </div>
      </Right>
    </Container>
  );
};
