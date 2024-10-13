import React from 'react';
import './Navbar.css';
import pylogo from '../Assets/pylogo.jpeg'; 

function Navbar() {
  return (
    <nav className="navbar">
          <div className="image-container">
      <img src={pylogo} alt="Sample" className="responsive-image" />
      
    
    </div>
      <ul className="nav-links" >
        <li><a href="#HeroSection">HOME</a></li>
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#Services">SERVICES</a></li>
        <li><a href="#Projects">PROJECT</a></li>
        <li><a href="#Contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
