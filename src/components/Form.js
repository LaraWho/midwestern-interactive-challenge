import React, { useState } from 'react';
import { post } from '../apiController';
import HeadingTwo from './HeadingTwo';

export default function Form() {

  const defaultErrorState = {
    first_name: false,
    last_name: false,
    title: false,
    email: false,
    message: false
  }

  const defaultFormValues = {
    first_name: '',
    last_name: '',
    title: '',
    email: '',
    message: ''
  }

  const [ formValues, setFormValues ] = useState(defaultFormValues)
  const [ hasInputError, setInputError ] = useState(defaultErrorState)
  const [ showSuccess, setSuccess ] = useState(false);

  const { first_name, last_name, title, email, message } = formValues

  const handleChange = (event) => {
    const value = event.target.value;
    if(showSuccess) {
      setSuccess(false)
    }

    setFormValues({
      ...formValues,
      [event.target.name]: value
    })
  }

  const validateForm = () => {
    const formErrors = {};
    if(!first_name) {
      formErrors['first_name'] = true
    }
    if(!last_name) {
      formErrors['last_name'] = true
    }
    if(!title) {
      formErrors['title'] = true
    }
    if(!email) {
      formErrors['email'] = true
    }
    if(!message) {
      formErrors['message'] = true
    }
    return formErrors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if(Object.keys(formErrors).length) {
      setInputError(formErrors);
      return;
    }
    post(formValues);
    setSuccess(true);
    handleReset();
  }

  const handleReset = () => {
    setFormValues(defaultFormValues);
    setInputError(defaultErrorState);
  }
  
  const closeSuccessMsg = () => {
    setSuccess(false)
  }
  
  return (
    <>
    <HeadingTwo content='Contact' classNames='form-title' />
    <form className='form_container'>
      <div className='form_input_container input--resize'>
        <input 
          className={`form_input ${hasInputError.first_name && !first_name && 'input--error'}`} 
          type='text' 
          placeholder='First Name'
          name='first_name'
          value={first_name} 
          onChange={handleChange} 
        />
        {hasInputError.first_name && !first_name && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className={`form_input ${hasInputError.last_name && !last_name && 'input--error'}`} 
          type='text' 
          placeholder='Last Name' 
          name='last_name'
          value={last_name} 
          onChange={handleChange}
        />
        {hasInputError.last_name && !last_name && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className={`form_input ${hasInputError.title && !title && 'input--error'}`} 
          type='text' 
          placeholder='Title' 
          name='title'
          value={title} 
          onChange={handleChange} 
        />
        {hasInputError.title && !title && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--resize'>
        <input 
          className={`form_input ${hasInputError.email && !email && 'input--error'}`} 
          type='email' 
          placeholder='Email'
          name='email'
          value={email} 
          onChange={handleChange} 
        />
        {hasInputError.email && !email && <span className='input--error--text'>required</span>}       
      </div>

      <div className='form_input_container input--full'>
        <textarea 
          className={`form_input ${hasInputError.message && !message && 'input--error'}`} 
          type='text' 
          rows='8'
          placeholder='Message' 
          name='message'
          value={message} 
          onChange={handleChange}
        />
        {hasInputError.message && !message && <span className='input--error--text'>required</span>}       
      </div>

      <button 
        className='form_button button button--primary' onClick={handleSubmit}
      >
        Submit
      </button>

      <p 
        className={`text-paragraph form--success--text ${showSuccess && 'show--success'}`} 
        onClick={closeSuccessMsg}
      >
        Message sent &times;
      </p>
    </form>
  </>
  )
}