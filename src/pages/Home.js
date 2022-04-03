import React from 'react';
import Navigation from '../components/Navigation';
import rabbit from '../assets/Rabbit.png';
import shield from '../assets/Shield.png';
import talkie from '../assets/Talkie.png';
import Card from '../components/Card';


export default function Home() {
    return(
      <>
        <Navigation linkTo="contact" />
        <div className='card-container'>
          <Card image={talkie} />
          <Card image={rabbit} />
          <Card image={shield} />
        </div>
      </>
    )
  }
