import React, { useState } from "react";
import "../assets/Main.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { motion } from 'framer-motion';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignForm() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()


  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    

 
    
    setError(""); 

    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result => {console.log(result)

      if(result.data.message == 'User already exists'){
        alert("user already existed")
      }else{
        alert(result.data.message)
        navigate('/Login');
      }

      
    })
    
    .catch(err=> console.log(err))

  };

  return (
    <div className="form-main">
       
      <form className="form-cont" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      
        <div>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        
        {error && <p className="error">{error}</p>}

        <button className="btnDark" type="submit">Sign Up</button>
        <Link className="link" to="/Login">Login</Link>
      </form>
    </div>
  );
}

export default SignForm;