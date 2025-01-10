import React from 'react';
import '../assets/Main.css';
function Abouthero1(props) {
    return (
       <div className='AboutHero'>
        <div className='hero-left'>
        <h1 className='H-title'> {props.title}</h1>
        <h6 className='H-des'>{props.desc}</h6>
        </div>
        <div className='hero-right'>
        <img className='aboutimg1'  width='100%' height='100%' src={props.img} />
        <img className='aboutimg2' width='100%' height='100%' src={props.img2} />
        </div>
       </div>
    );
}

export default Abouthero1;