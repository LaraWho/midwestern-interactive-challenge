import React, { useState } from 'react';
import Heading from './Heading';
import UOList from '../components/UOList';
import { removeDuplicates } from '../data';
import Paragraph from './Paragraph';

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
      className={`button button-paragraph text--accent ${disabled && 'disabled'}`}
    > 
      this link
    </button> 
)  

  const paragraphText = (
    <>
      Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when { showNames } is clicked. If the operation has been completed already, notify the user that this has already been done.
    </>
  )

  return (
    <>  
      <Heading content='JavaScript Puzzle' />
      <Paragraph paragraphText={paragraphText}/>
      <div className='list_container'>
        { names && <UOList names={names} /> }
      </div>
    </>

  )
}