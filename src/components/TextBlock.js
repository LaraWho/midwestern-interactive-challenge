import React from 'react';

export default function TextBlock( props ) {
  const { title, content } = props;

  return(
    <div className='textblock_container'>
      <h1 className='textblock_title title--h1 text--white'><span className='title--underline'>{title}</span></h1>
      <p className='textblock_text text--paragraph text--white'>{content}</p>
    </div>
  )
}