import React, { useState } from "react";
import "../assets/Main.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { motion } from 'framer-motion';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForms() {

  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !password) {
      setError("All fields are required.");
      return;
    }

    axios.post('http://localhost:3001/login', {name, password})
    .then(result => {console.log(result)
      if(result.data == "Success"){
        navigate('/')
      }
 
    })
    .catch(err => console.log(err))

    
    
  };

  return (
    <div className="form-main">
     
      <form className="form-cont" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="logoBox flex-container">
        <motion.img
        
        initial={{ x: '-100vw' }} 
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}

        src={logo} alt='' width='100%' height='100%' ></motion.img>
      </div>
      <h5 className="logoText">ARTS COUNCIL <br /> KARACHI</h5>
      
        <div>
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="btnDark" type="submit">Sign Up</button>
        <Link className="link" to="/signin">Create account</Link>
      </form>
    </div>
  );
}

export default LoginForms;