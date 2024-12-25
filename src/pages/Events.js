import React from 'react';
import '../assets/Main.css';
import Navbar from '../components/Navbar';
import EventList from '../components/EventsList';
import Footer from '../components/Footer';

function Events(){
    return (
        <>
         <Navbar />
         <div className='container' >
           
         <div className='Events-cont'>
            <div className='left'>
            <h1>Event name</h1>
            <button>Register Now</button>
            </div>
            <div className='right'>
            <div className='Event-info'>
                <div className='shape'>a</div>
                <h4 className='when-and-where'>When and wher</h4>
                <h4 className='and-where'>November 8-9 arts council</h4>
                <h4 className='on-or-of'>online</h4>
            </div>
            
            <div className='Event-time-date flex-evenly'>

            <div>
                    <h6 className='Event-list-name'>56</h6>
                    <h6 className='Event-list-name'>Day</h6>
                </div>
                <div>
                    <h6 className='Event-list-name'>56</h6>
                    <h6 className='Event-list-name'>Hour</h6>
                </div>
                <div>
                    <h6 className='Event-list-name'>56</h6>
                    <h6 className='Event-list-name'>min</h6>
                </div>
            </div>
            </div>

         </div>
         <div className='Events-list-cont'>
            
         <h1>Events</h1>
            <EventList />
            
         </div>
         <Footer />
         </div>
        </>
    );
}

export default Events;

