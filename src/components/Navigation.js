import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

export default function Navigation( props ) {
  const { linkToPage, pageName } = props;

  return (
    <div className='nav_container'>
      <img src={logo} className='nav_item nav-logo' alt='Midwestern Interactive' />
      <Link to={`${linkToPage}`} className='nav_item nav-link' >
        <h2 className='nav_link'>
          { pageName }
        </h2>
      </Link>
    </div>
  )
}