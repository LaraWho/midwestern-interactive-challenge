import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import RemoveDuplicate from '../components/RemoveDuplicate';
import { get } from '../apiController';


export default function Home() {
  const [ cardContent, setContent ] = useState([]);
  const [ currentPage ] = useState('home')

  useEffect(() => {
    (async () => {
      const apiData = await get(currentPage);
      setContent(apiData.data)
    })()
  }, [currentPage])  

  const displayCards = cardContent.map((cardContent, i) => (
      <Card key={i} imageNum={i} data={cardContent} />
    ))

    return cardContent.length &&
      (<>
        <Navigation linkTo='contact' />
        <div className='card_wrapper'>
          { displayCards }
        </div>
        <div className='textblock_container_home'>
          <RemoveDuplicate />
        </div>
      </>)
  }