import React from 'react'
import { Container } from './styles';

export const SelectVideo = ({name, author, views, img, url, setChosenVideo}) => {
  console.log(url)
  return (
    <Container onClick={()=>setChosenVideo(url)}>
              <img src={img} className='left'/>
        <div className='right'>
          <h3>{name}</h3>
          <p>{author}</p>
          <p>{views} views</p>
        </div>
    </Container>
  )

  
}

