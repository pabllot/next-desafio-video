import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { Container, Sidebarr, Filter, Button, LargeButton, Icon } from './styles';
import { BsSunFill} from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'

export const Sidebar = ({setChosenVideo, toggleTheme, theme, data }) => {
  const [filter, setFilter] = useState('office');
  const [filteredVids, setFilteredVids] = useState([]);


  // vai filtrar todos os videos do db e retornar somente os que tem o mesmo genero, 
  useEffect(()=>{
    setFilteredVids([])
      for(let i = 0; i < data.length; i++){
        if(data[i].genre === filter) setFilteredVids(prev => [...prev, data[i]])  
    }
  },[filter])


  return (
    <Container >
        <Sidebarr>
          <Filter> 
            <LargeButton onClick={()=>setFilter('office')}>The Office</LargeButton>
            <Button onClick={()=>setFilter('cats')}>Cats</Button>
            <Button onClick={()=>setFilter('dogs')}>Dogs</Button>
            <Button onClick={()=>setFilter('kids')}>Kids</Button>
            {/*<Icon onClick={toggleTheme}>{theme.title === 'light' ? <IoMdMoon/> : <BsSunFill/>}</Icon>*/}
          </Filter>

       {filteredVids.slice(0, 5).map(item=><Card theme={theme} setChosenVideo={setChosenVideo} url={item.url}
        key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} alt={item.alt}/>       
       )}
 
      </Sidebarr>
    </Container>
  )
}
