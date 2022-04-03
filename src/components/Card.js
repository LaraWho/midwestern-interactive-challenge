import React from 'react';

export default function Card( { image } ) {
  return(
    <div className='card_container'>
      <img src={image} className='card_img' alt='' />
      <h2 className='card_title title--h2'>Heading Two</h2>
      <p className='card_text text--paragraph'>Because I'm the Doctor ... and this is my spoon. I hate computers and refuse to be bullied by them.</p>
      <button className='card_button button button--primary'>Learn More</button>
    </div>
  )
}