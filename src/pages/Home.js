import React from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import HeadingOne from '../components/TextBlock';
import rabbit from '../assets/Rabbit.png';
import shield from '../assets/Shield.png';
import talkie from '../assets/Talkie.png';


export default function Home() {
    return(
      <>
        <Navigation linkTo="contact" />
        <div className='card_wrapper'>
          <Card image={talkie} />
          <Card image={rabbit} />
          <Card image={shield} />
        </div>
        <HeadingOne />
      </>
    )
  }
