import React from 'react';
import '../assets/Main.css';

function Newslater(){
    return(
        <>
        <div className='Newslater-cont'>
            <div className='Ntitle'><h1>Newslater</h1></div>
            <div className='contents'>
                <p className='News-text'><h3>Ready To Get Started ?</h3>
                Sign Up For Contact Us</p>
                <button className='btnDark'>Sign in</button>
                <button className='btn'>Log in</button>
            </div>
        </div>
        </>
    )
}

export default Newslater;