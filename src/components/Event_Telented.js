import React from 'react';
import '../assets/Main.css';
import Speakercard from './Speakers-card';
function Event_telen() {
    return (
        <div className='tel-cont'>
        <h1>Telented Speakers</h1>

        <div className='reg-cards flex-evenly'>
            <Speakercard />
            <Speakercard />
            <Speakercard />
        </div>
    </div>
    );
}

export default Event_telen;