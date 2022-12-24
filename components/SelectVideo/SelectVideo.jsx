import React from 'react'
import { Container } from './styles';

export const SelectVideo = ({name, author, views, img, url, setChosenVideo}) => {
  console.log(url)
  return (
    <Container onClick={()=>setChosenVideo(url)}>
              <img src={img} className='left'/>
        <div className='right'>
          <h3>{name}</h3>
          <div>
            <p>{author}</p>
            <p className='views'>{views} views</p>
          </div>
        </div>
    </Container>
  )

  
}

