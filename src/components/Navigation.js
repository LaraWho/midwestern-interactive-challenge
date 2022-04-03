import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation( { linkTo } ) {


  return(
    <>
    <img src="../assets/Logo.png" alt="Midwestern Interactive" />
    <Link to={`/${ linkTo }`} >
      <h2>
        { linkTo }
      </h2>
    </Link>
    </>
  )
}