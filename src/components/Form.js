import React, { useState } from 'react';
import { post } from '../apiController';

export default function Form() {

  const [ formValues, setFormValues ] = useState({
    first_name: '',
    last_name: '',
    title: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    post(formValues);
    handleReset();
  }

  const handleReset = () => {
    setFormValues({
      first_name: '',
      last_name: '',
      title: '',
      email: '',
      message: ''
    })
  }

  const { first_name, last_name, title, email, message } = formValues

  return (
    <>
      <h2 className='form_title title--h2'>Heading Two</h2>
      <form className='form_container'>
        <input 
          className='form_input input--resize' 
          type='text' 
          placeholder='First Name' 
          name='first_name' 
          value={first_name} 
          onChange={handleChange} 
          />

        <input 
          className='form_input input--resize' 
          type='text' 
          placeholder='Last Name' 
          name='last_name' 
          value={last_name} 
          onChange={handleChange}
          />

        <input 
          className='form_input input--resize' 
          type='text' 
          placeholder='Title' 
          name='title'
          value={title} 
          onChange={handleChange} 
          />

        <input 
          className='form_input input--resize' 
          type='email' 
          placeholder='Email' 
          name='email'
          value={email} 
          onChange={handleChange} 
          />

        <textarea 
          className='form_input input--full' 
          type='text' 
          rows='8'
          placeholder='Message' 
          name='message'
          value={message} 
          onChange={handleChange} 
          />

        <button className='form_button button button--primary' onClick={handleSubmit}>Submit</button>

      </form>
    </>
  )
}