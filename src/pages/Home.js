import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import JSPuzzle from '../components/JSPuzzle';
import { get } from '../apiController';


export default function Home() {
  const [ cardContent, setContent ] = useState([]);

  useEffect(() => {
    (async () => {
      const apiData = await get('home');
      setContent(apiData.data)
    })()
  }, [])  

  const displayCards = cardContent.map((cardContent, i) => (
      <Card key={i} imageNum={i} data={cardContent} />
    ))

    return cardContent.length &&
      (<>
        <Navigation linkToPage='contact' pageName='contact' />
        <div className='card_wrapper'>
          { displayCards }
        </div>
        <div className='textblock_container_home'>
          <JSPuzzle />
        </div>
      </>)
  }