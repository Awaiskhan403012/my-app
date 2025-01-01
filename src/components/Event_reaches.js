import React from 'react';
import '../assets/Main.css';
function Event_reaches() {
    return (
        <div className='reach-cont flex-evenly'>
        <div className='R1 flex-column'>
            <h1 className='counter'>0</h1>
            <h3 className='c-names'>participants</h3>
        </div>
        <div className='R1'>
        <h1 className='counter'>0</h1>
        <h3 className='c-names'>speakers</h3>
        </div>
        <div className='R1'>
        <h1 className='counter'>0</h1>
        <h3 className='c-names'>Workshop</h3>
        </div>
        <div className='R1'>
        <h1 className='counter'>0</h1>
        <h3 className='c-names'>Award wins</h3>
        </div>
    </div>
    );
}

export default Event_reaches;