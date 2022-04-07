import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import HeadingOne from '../components/HeadingOne';
import Paragraph from '../components/Paragraph';
import { get } from '../apiController';


export default function Contact() {
  const [ pageContent, setContent ] = useState({title: '', content: ''});

  useEffect(() => {
    (async () => {
      const apiData = await get('contact');
      setContent({
        title: apiData.data[0].title,
        content: apiData.data[0].content,
      })
    })()
  }, [])
  
  const { title, content } = pageContent;
    
    return pageContent.content &&
      (<div className='contact_wrapper'>

        <Navigation linkToPage='/' pageName='home' />

        <div className='contact_container'>
          <div className='textblock_container_contact'>
            <HeadingOne content={title} classNames='text--white' />
            <Paragraph content={content} classNames='text--white' />
          </div>

          <div className='form_wrapper'>
            <Form />
          </div>
        </div>

      </div>)
}
