import React from 'react';

export default function UOList( props ) {
  const { names } = props;

  const unorderedList = names.map((name, i) => (
    <li key={i} className='list-item text-paragraph text--white'>{ name }</li>
  ))

  return (
    <ul className='list'>
      { unorderedList }
    </ul>
  )
}