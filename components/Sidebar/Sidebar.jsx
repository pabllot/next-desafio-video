import React, { useEffect, useState } from 'react'
import { SelectVideo } from '../SelectVideo/SelectVideo'
import { Container } from './styles';
import { vids } from '../Database/Data'

export const Sidebar = ({setChosenVideo }) => {
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
      <div className='sidebar'>
        <div className='filter'> 
          <button className='button' onClick={()=>setFilter('kids')}> Office</button>
          <button className='button' onClick={()=>setFilter('cats')}>Cats</button>
          <button className='button' onClick={()=>setFilter('dogs')}>Dogs</button>
          <button className='button' onClick={()=>setFilter('soccer')}>Kids</button>
        </div>
       {filteredVids.slice(0, 5).map(item=><SelectVideo setChosenVideo={setChosenVideo} url={item.url} key={item.id} name={item.name} author={item.author} views={item.views} img={item.img} />       
       )}
 
      </div>
    </Container>
  )
}

