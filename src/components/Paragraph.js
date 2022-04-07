import React from 'react';

export default function Paragraph( props ) {
  const { content, classNames } = props;

  return (
    <p className={`text-paragraph ${classNames}`}>
      {content}
    </p>
  )
}