import React from 'react'
import { Container, Left, Right } from './styles';

export const SelectVideo = ({name, author, views, img, url, setChosenVideo, theme}) => {

  return (
    <Container onClick={()=>setChosenVideo(url)}>
        <Left src={img} className='left'/>
        <Right>
          <h3 className={`${theme ? 'color' : ''}`}>{name}</h3>
          <div>
            <p className={`${theme ? 'color' : ''}`}>{author}</p>
            <p className={`view ${theme ? 'color' : ''}`}>{views} views</p>
          </div>
        </Right>
    </Container>
  )

  
}

