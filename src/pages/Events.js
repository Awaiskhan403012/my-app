import React from 'react';
import '../assets/Main.css';
import Navbar from '../components/Navbar';
import EventList from '../components/EventsList';
import Eventimg from '../components/Event-img'
import Footer from '../components/Footer';

function Events(){
    return (
        <>
         <Navbar />
         
         <div className='container' >
         <Eventimg name='Event name' img='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80' when='20 jun' where='arts council karachi' onof='online' />
         
           
         <div className='Events-list-cont'>
            
        
            <EventList />
            <EventList />
            <EventList />
            
         </div>
        
         <Footer />
         </div>
        </>
    );
}

export default Events;

