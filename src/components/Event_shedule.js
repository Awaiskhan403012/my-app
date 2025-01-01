import React from 'react';
import '../assets/Main.css';
import EventList from './EventsList';
function Event_shedule() {
    return (
        <div className='sh-cont'>
        <div className='sh-head flex-around'>
            <h1>Event Shedule</h1>
            <button className='btn'>Day one</button>
            <button className='btn'>Day two</button>
            <button className='btn'>Day three</button>
        </div>
        <EventList />
    </div>
    );
}

export default Event_shedule;