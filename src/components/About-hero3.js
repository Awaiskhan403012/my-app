import React from 'react';
import '../assets/Main.css';
function Abouthero3(props) {
    return (
       <div className='AboutHero3'>
        <div className='hero-left'>
        <h1 className='H-title'> {props.title}</h1>
        <h6 className='H-des'>{props.desc}</h6>
        </div>
        <div className='Ab-hero-right'>
        <img width='100%' height='100%' src={props.img} />
        </div>
       </div>
    );
}

export default Abouthero3;