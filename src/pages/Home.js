import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import TextBlock from '../components/TextBlock';
import { get } from '../apiController';


export default function Home() {
  const [ cardContent, setContent ] = useState([]);
  const [ currentPage ] = useState( 'home' )


  useEffect(() => {
    const getData = async () => {
      const apiData = await get(currentPage);
      setContent(apiData.data)
    }
    getData();
  }, [currentPage])

  const displayCards = cardContent.map((cardContent, i) => (
      <Card key={i} imageNum={i} data={cardContent} />
    ))
  
  return(
      <>
        <Navigation linkTo='contact' />
        <div className='card_wrapper'>
          { displayCards }
        </div>
        <TextBlock title='JavaScript Puzzle' content='Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <a>this link</a> is clicked. If the operation has been completed already, notify the user that this has already been done.'/>
      </>
    )
  }
