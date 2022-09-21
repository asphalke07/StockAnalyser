import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

    // const [data,setData]=useState("");

    // useEffect
  return (

    <nav className="navbar">
      <h1>Stock Analyser</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>See US Market</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;