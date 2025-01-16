import React from 'react';
import '../assets/Main.css';
import Regcards from './Reg-card';
function Event_regist() {
    return (
        <div className='reg-cont flex-column'>
        <div className='reg-head flex-evenly'>
            <div className='flex-column'>
            <h6>Register Now</h6>
            <h2>GET TICKET NOW</h2>
            </div>
            <div className='head-box'></div>
        </div>
        <div className='reg-cards flex-column'>
            <Regcards />
            <br />
            <Regcards />
            <br />
            <Regcards />
        </div>
    </div>
    );
}

export default Event_regist;