import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

export default function Navigation( { linkTo } ) {


  return(
    <div className='nav'>
      <img src={logo} className='nav_logo' alt='Midwestern Interactive' />
      <Link to={`/${ linkTo }`} className='nav_link' >
        <h2 className='nav_link'>
          { linkTo }
        </h2>
      </Link>
    </div>
  )
}