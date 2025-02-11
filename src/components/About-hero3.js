import React from 'react';
import '../assets/Main.css';
function Abouthero3(props) {
    return (
       <div className='AboutHero3'>
        <div className='hero-left'>
        <h1 className='H-title' style={{
      color: "white"
    }}> {props.title}</h1>
        <h6 className='H-des'style={{
      color: "white",
      fontSize: "15px"
    }}>{props.desc}</h6>
        </div>
        <div className='Ab-hero-right'>
        <img width='100%' height='100%' src={props.img} />
        </div>
       </div>
    );
}

export default Abouthero3;