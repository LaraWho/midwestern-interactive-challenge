import React, { useState } from 'react';
import Heading from './Heading';
import UOList from '../components/UOList';
import { removeDuplicates } from '../data';
import Paragraph from './Paragraph';

export default function RemoveDuplicate() {
  const [ isListDisplayed, setDisplayBool  ] = useState(false);
  const [ names, setNames  ] = useState([]);


  const displayNames = () => {
    let nameList = removeDuplicates();
    setNames(nameList);
    setDisplayBool(true);
  }
  const paragraphText = (
    <>
    Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <span onClick={displayNames}>this link</span> is clicked. If the operation has been completed already, notify the user that this has already been done.
    </>
  )

  return(
    <>  
      <Heading content='JavaScript Puzzle' />
      <Paragraph paragraphText={paragraphText}/>
      { isListDisplayed && <UOList names={names} /> 
      }
    </>

  )
}