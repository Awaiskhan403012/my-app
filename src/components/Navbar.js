import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Main.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoBox"></div>
      <h5 className="logoText">ARTS COUNCIL <br /> KARACHI</h5>

      <div className="navLinks">
        
      <li className="navItem">
            <Link to="/Events">Events</Link> 
          </li>

          <li className="navItem">
            <Link to="/Event">Event</Link> 
          </li>
          
          <li className="navItem">
            <Link to="/">Home</Link> 
          </li>
          <li className="navItem">
            <Link to="/about">About</Link> 
          </li>
          <li className="navItem">
            <Link to="/academics">Academics</Link>
          </li>
          <li className="navItem">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navItem">
            <Link to="/governing-body">Governing Body</Link> 
          </li>
          <li className="navItem">
            <Link to="/our-team">Our Team</Link>
          </li>
          <li className="navItem">
            <Link to="/venues">Venues</Link>
          </li>
     
      </div>
      
      <button className="btn">Sign in</button>
    </nav>
  );
}

export default Navbar;
