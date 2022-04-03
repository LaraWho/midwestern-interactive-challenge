import React from 'react';
import Navigation from '../components/Navigation';
import Form from '../components/Form';


export default function Contact() {
  
    return(
      <>
        <Navigation linkTo='home' />
        <div className='form_wrapper'>
          <Form />
        </div>
      </>
    )
}
