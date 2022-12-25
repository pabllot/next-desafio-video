import React from 'react'
import { Container } from './styles';

export const SelectVideo = ({name, author, views, img, url, setChosenVideo, theme, setTheme}) => {
  console.log(url)
  return (
    <Container onClick={()=>setChosenVideo(url)}>
              <img src={img} className='left'/>
        <div className='right'>
          <h3 className={`${theme ? 'color' : ''}`}>{name}</h3>
          <div>
            <p className={`${theme ? 'color' : ''}`}>{author}</p>
            <p className={`view ${theme ? 'color' : ''}`}>{views} views</p>
          </div>
        </div>
    </Container>
  )

  
}

