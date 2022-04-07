import React from 'react';

export default function HeadingTwo( props ) {
  const { content, classNames} = props;

  return (
    <h2 className={`title-h2 ${classNames}`}>
      {content}
    </h2>
  )
}