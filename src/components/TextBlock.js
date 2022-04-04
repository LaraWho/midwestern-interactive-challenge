import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function TextBlock( props ) {
  const { title, content } = props;

  return(
    <div className='textblock_container'>
      <Heading content={title} />
      <Paragraph paragraphText={content} />
    </div>
  )
}