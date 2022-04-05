import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import TextBlock from '../components/TextBlock';
import Form from '../components/Form';
import { get } from '../apiController';


export default function Contact() {
  const [ pageContent, setContent ] = useState({title: '', content: ''});
  const [ currentPage ] = useState('contact')

  useEffect(() => {
    (async () => {
      const apiData = await get(currentPage);
      setContent({
        title: apiData.data[0].title,
        content: apiData.data[0].content,
      })
    })()
  }, [currentPage])
  
  const { title, content } = pageContent;
    
    return pageContent.content &&
      (<div className='contact_wrapper'>

        <Navigation linkTo='home' />

        <div className='contact_container'>
          <div className='textblock_wrapper contact-textblock'>
            <TextBlock title={title} content={content} />
          </div>

          <div className='form_wrapper'>
            <Form />
          </div>
        </div>

      </div>)
}
