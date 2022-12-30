import React from 'react'
import { Container, Left, Right, Title, Author, Views } from './styles';

export const SelectVideo = ({name, author, views, img, url, setChosenVideo, theme}) => {

  return (
    <Container onClick={()=>setChosenVideo(url)}>
        <Left src={img} className='left'/>
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

