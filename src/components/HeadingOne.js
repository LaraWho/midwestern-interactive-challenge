import React from 'react';

export default function HeadingOne( props ) {
  const { content, classNames } = props;
  const [firstWord, rest] = content.split(' ');

  return (
    <h1 className={`title-h1 ${classNames}`}>
      <span className='title--underline'>{firstWord}
      </span>
      {rest}
    </h1>
  )
}