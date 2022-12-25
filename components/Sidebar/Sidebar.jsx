import React, { useEffect, useState } from 'react'
import { SelectVideo } from '../SelectVideo/SelectVideo'
import { Container } from './styles';
import { vids } from '../Database/Data'
import { BsSunFill} from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'

export const Sidebar = ({setChosenVideo, theme, setTheme }) => {
  const [filter, setFilter] = useState('kids');
  const [filteredVids, setFilteredVids] = useState([]);


  // vai filtrar todos os videos do db e retornar somente os que tem o mesmo genero, 
  useEffect(()=>{
    setFilteredVids([])
      for(let i = 0; i < vids.length; i++){
        if(vids[i].genre === filter) setFilteredVids(prev => [...prev, vids[i]])  
    }
  },[filter])


  return (
    <Container>
        <div className={`sidebar ${theme ? 'light' : ''}`}>
          <div className={`filter ${theme ? 'light' : ''}`}> 
            <button className={`button office ${theme ? 'light' : ''}`} onClick={()=>setFilter('kids')}>The Office</button>
            <button className={`button ${theme ? 'light' : ''}`} onClick={()=>setFilter('cats')}>Cats</button>
            <button className={`button ${theme ? 'light' : ''}`} onClick={()=>setFilter('dogs')}>Dogs</button>
            <button className={`button ${theme ? 'light' : ''}`} onClick={()=>setFilter('soccer')}>Kids</button>
            <div className={`icon ${theme ? 'light' : ''}`}onClick={()=>setTheme(prev => !prev)}>{theme ? <IoMdMoon/> : <BsSunFill/>}</div>
        </div>
       {filteredVids.slice(0, 5).map(item=><SelectVideo theme={theme} setTheme={setTheme} setChosenVideo={setChosenVideo} url={item.url} key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} />       
       )}
 
      </div>
    </Container>
  )
}

