import React from 'react';

export default function Heading( { content } ) {
  return(
    <h1 className='textblock_title title--h1 text--white'><span className='textblock_title title--underline'>{content}</span></h1>
  )
}