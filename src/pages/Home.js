import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import TextBlock from '../components/TextBlock';
import { get } from '../apiController';


export default function Home() {
  const [ pageContent, setContent ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiData = await get('home');
      setContent(apiData.data)
    }
    getData();
  }, [])

  const displayCards = pageContent.map((cardContent, i) => (
      <Card key={i} imageNum={i} data={cardContent} />
    ))
  
  return(
      <>
        <Navigation linkTo='contact' />
        <div className='card_wrapper'>
          { displayCards }
        </div>
        <TextBlock />
      </>
    )
  }
