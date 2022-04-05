import React from 'react';

export default function Heading( { content } ) {
  return (
    <h1 className='heading_title title--h1 text--white'><span className='heading_title title--underline'>{content}</span></h1>
  )
}