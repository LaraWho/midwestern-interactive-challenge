import React from 'react';

export default function UOList( props ) {
  const { names } = props;

  const unorderedList = names.map((name, i) => (
    <li key={i}>{ name }</li>
  ))

  return(
    <ul>
      { unorderedList }
    </ul>
  )
}