import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

export default function Navigation( { linkTo } ) {

  return(
    <div className='nav_container'>
      <img src={logo} className='nav_item nav-logo' alt='Midwestern Interactive' />
      <Link to={`/${ linkTo }`} className='nav_item nav-link' >
        <h2 className='nav_link'>
          { linkTo }
        </h2>
      </Link>
    </div>
  )
}