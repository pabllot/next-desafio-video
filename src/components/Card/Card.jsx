import React from 'react'
import { Container, Left, Right, Title, Author, Views } from './styles';

export const Card = ({name, author, views, img, url, setChosenVideo, alt}) => {

  return (
    <Container onClick={()=>setChosenVideo(url)}>
        <Left src={img} alt={alt}/>
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

