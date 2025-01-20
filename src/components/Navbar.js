import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/Main.css';
import logo from '../assets/images/logo.png';
function Navbar() {
  return (
    <nav className="navbar flex-container justify-between align-center p-2">
      <div className="logoBox flex-container">
        <motion.img
        
        initial={{ x: '-100vw' }} 
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}

        src={logo} alt='' width='100%' height='100%' ></motion.img>
      </div>
      <h5 className="logoText">ARTS COUNCIL <br /> KARACHI</h5>

      
        
     
           
      



          <motion.div
          
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          class="dropdown">
  <button class="btnDark">Menu</button>
  <div class="dropdown-content">
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
          <li className="navItem"><Link to="/Events">Events</Link></li>
  </div>
</motion.div>

     

      
      
      <button className="btn">Sign in</button>
    </nav>
  );
}

export default Navbar;
