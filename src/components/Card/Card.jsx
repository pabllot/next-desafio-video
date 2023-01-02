import React from 'react'
import { Container, Left, Right, Title, Author, Views } from './styles';

export const Card = ({name, author, views, img, url, setChosenVideo}) => {

  return (
    <Container onClick={()=>setChosenVideo(url)}>
        <Left src={img}/>
        <Right>
          <Title>{name}</Title>
          <div>
            <Author>{author}</Author>
            <Views>{views} views</Views>
          </div>
        </Right>
    </Container>
  )

  
}

