import React from 'react';
import '../assets/Main.css';

function Regcards() {
    return (
   <div className='reg-card flex-column'>
    <div className='flex-around'>
    <div className='reg-price-box'>price</div>
    <div className='reg-type'>type</div>
    </div>
    <div className='reg-card-img'><img src='' width='' height='' alt='' /></div>
    <button className='btn'>Buy ticket</button>
   </div>
    );
}

export default Regcards;