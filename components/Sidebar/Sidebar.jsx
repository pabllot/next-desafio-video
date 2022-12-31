import React, { useEffect, useState } from 'react'
import { SelectVideo } from '../SelectVideo/SelectVideo'
import { Container, Sidebarr, Filter, Button, LargeButton, Icon } from './styles';
import { vids } from '../Database/Data'
import { BsSunFill} from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'

export const Sidebar = ({setChosenVideo, toggleTheme, theme }) => {
  const [filter, setFilter] = useState('office');
  const [filteredVids, setFilteredVids] = useState([]);


  // vai filtrar todos os videos do db e retornar somente os que tem o mesmo genero, 
  useEffect(()=>{
    setFilteredVids([])
      for(let i = 0; i < vids.length; i++){
        if(vids[i].genre === filter) setFilteredVids(prev => [...prev, vids[i]])  
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
            <Icon onClick={toggleTheme}>{theme.title === 'light' ? <IoMdMoon/> : <BsSunFill/>}</Icon>
          </Filter>

       {filteredVids.slice(0, 5).map(item=><SelectVideo theme={theme} setChosenVideo={setChosenVideo} url={item.url}
        key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} />       
       )}
 
      </Sidebarr>
    </Container>
  )
}

