import React, { useState } from 'react';

export default function Form() {

  const [ formValues, setState ] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const value = event.target.value;

    setState({
      ...formValues,
      [event.target.name]: value
    })
  }

  const { firstName, lastName, title, email, message } = formValues

  return(
    <>
      <h2 className='form_title title--h2'>Heading Two</h2>
      <form className='form_container'>
        <input 
          className='form_input input--resize' 
          type='text' 
          placeholder='First Name' 
          name='firstName' 
          value={firstName} 
          onChange={handleChange} 
          />

        <input 
          className='form_input input--resize' 
          type='text' 
          placeholder='Last Name' 
          name='lastName' 
          value={lastName} 
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
          rows='10'
          placeholder='Message' 
          name='message'
          value={message} 
          onChange={handleChange} 
          />

        <button className='form_button button button--primary'>Submit</button>

      </form>
    </>
  )
}