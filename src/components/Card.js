import React from 'react';
import talkie from '../assets/Talkie.png';
import rabbit from '../assets/Rabbit.png';
import shield from '../assets/Shield.png';

const imgSourceMap = {
  0: talkie,
  1: rabbit,
  2: shield,
}

export default function Card( props ) {
  const { imageNum, data } = props;

  return (
    <div className='card_container'>
      <div className='card_img_container'>
        <img src={imgSourceMap[imageNum]} className='card_img' alt='' />
      </div>
      <h2 className='card_title title--h2'>{data.title}</h2>
      <p className='card_text text--paragraph'>{data.content}</p>
      <button className='card_button button button--primary'>Learn More</button>
    </div>
  )
}