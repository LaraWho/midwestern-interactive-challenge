import React from 'react';
import talkie from '../assets/Talkie.png';
import rabbit from '../assets/Rabbit.png';
import shield from '../assets/Shield.png';
import HeadingTwo from './HeadingTwo';
import Paragraph from './Paragraph';

const imgSourceMap = {
  0: talkie,
  1: rabbit,
  2: shield,
}

export default function Card( props ) {
  const { imageNum, data } = props;

  return (
    <div className='card_container'>
      <div className='card-img-container'>
        <img src={imgSourceMap[imageNum]} className='card-img' alt='' />
      </div>
      <HeadingTwo content={data.title} classNames='card-title' />
      <Paragraph content={data.content} classNames='card-text' />
      <button className='card-button button button--primary'>Learn More</button>
    </div>
  )
}