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
  const [ submitted, setSubmitted ] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(first_name) {
      setValid(true);
      post(formValues);
    }
    setSubmitted(true);
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
      <div className='form_input_container input--resize'>
        <input 
          className='form_input' 
          type='text' 
          placeholder='First Name'
          name='first_name'
          value={first_name} 
          onChange={handleChange} 
        />
        {submitted && !first_name && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className='form_input' 
          type='text' 
          placeholder='Last Name' 
          name='last_name'
          value={last_name} 
          onChange={handleChange}
        />
        {submitted && !last_name && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className='form_input' 
          type='text' 
          placeholder='Title' 
          name='title'
          value={title} 
          onChange={handleChange} 
        />
        {submitted && !title && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className='form_input' 
          type='email' 
          placeholder='Email'
          name='email'
          value={email} 
          onChange={handleChange} 
        />
        {submitted && !email && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--full'>
        <textarea 
          className='form_input' 
          type='text' 
          rows='8'
          placeholder='Message' 
          name='message'
          value={message} 
          onChange={handleChange}
        />
        {submitted && !email && <span className='input--error--text'>required</span>}       
      </div>
      {valid && <p>submitted!</p>}
      <button className='form_button button button--primary' onClick={handleSubmit} >Submit</button>

    </form>
  </>
  )
}