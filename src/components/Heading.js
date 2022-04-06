import React from 'react';

export default function Heading( { content } ) {
  const [firstWord, rest] = content.split(' ');

  return (
    <h1 className='heading_title title--h1 text--white'>
      <span className='title--underline'>{firstWord}
      </span>
      {rest}
    </h1>
  )
}