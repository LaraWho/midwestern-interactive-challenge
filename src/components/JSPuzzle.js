import React, { useState } from 'react';
import HeadingOne from './HeadingOne';
import List from './List';
import Paragraph from './Paragraph';
import { removeDuplicates } from '../jsPuzzle';

export default function RemoveDuplicate() {
  const [ disabled, setDisabled  ] = useState(false);
  const [ names, setNames  ] = useState();

  const displayNames = () => setNames(removeDuplicates());
  
  const showTooltip = () => {
    if(!disabled) {
      setDisabled(true);
    }
  }

  const showNames = (
    <button 
      onClick={names ? showTooltip : displayNames} 
      className={`button button--underline text--accent ${disabled && 'disabled'}`}
    > 
      this link
    </button> 
)  

  const paragraphText = (
    <>
      Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when {showNames} is clicked. If the operation has been completed already, notify the user that this has already been done.
    </>
  )

  return (
    <>  
      <HeadingOne content='JavaScript Puzzle' classNames='text--white' />
      <Paragraph content={paragraphText} classNames='text--white' />
      <div className='list_container'>
        {names && <List names={names} />}
      </div>
    </>

  )
}