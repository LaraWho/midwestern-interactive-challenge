import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import TextBlock from '../components/TextBlock';
import UOList from '../components/UOList';
import { get } from '../apiController';
import { title, content, removeDuplicates } from '../data';


export default function Home() {
  const [ cardContent, setContent ] = useState([]);
  const [ currentPage ] = useState('home')
  const [ isListDisplayed, setDisplayBool  ] = useState(false);
  const [ names, setNames  ] = useState([]);


  useEffect(() => {
    (async () => {
      const apiData = await get(currentPage);
      setContent(apiData.data)
    })()
  }, [currentPage])  

  const displayNames = () => {
    let nameList = removeDuplicates();
    setNames(nameList);
    setDisplayBool(true);
  }

  const displayCards = cardContent.map((cardContent, i) => (
      <Card key={i} imageNum={i} data={cardContent} />
    ))

    return(
      <>
        <Navigation linkTo='contact' />
        <div className='card_wrapper'>
          { displayCards }
        </div>
        <button onClick={displayNames}>remove duplicates</button>
        <TextBlock title={title} content={content} />
        { isListDisplayed && <UOList names={names} /> }
      </>
    )
  }
