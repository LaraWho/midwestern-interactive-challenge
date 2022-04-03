import React from 'react';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import TextBlock from '../components/TextBlock';


export default function Contact() {
  
    return(
      <div className='contact_wrapper'>

        <Navigation linkTo='home' currentPage='contact' />

        <div className='contact_container'>
          <div className='textblock_wrapper contact-textblock'>
            <TextBlock />
          </div>

          <div className='form_wrapper'>
            <Form />
          </div>
        </div>

      </div>
    )
}
