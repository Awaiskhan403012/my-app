import React from 'react';
import '../assets/Main.css';
function Acadmicshero(props) {
    return (
       <div className='AcadmicHero'>
        <div className='hero-left'>
        <h1 className='H-title'> {props.title}</h1>
        <h6 className='H-des'>{props.desc}</h6>
        </div>
        <div className='hero-right'>
        <img width='100%' height='100%' src={props.img} alt=''/>
        </div>
       </div>
    );
}

export default Acadmicshero;