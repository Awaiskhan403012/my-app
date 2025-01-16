import React from 'react';
import '../assets/Main.css';
import Navbar from '../components/Navbar';
import Eventwhy from '../components/Event_why';
import Eventorgpartner from '../components/Event_org_partner';
import Eventreaches from '../components/Event_reaches';
import Eventregist from '../components/Event_regist';
import Eventshedule from '../components/Event_shedule';
import EventTelented from '../components/Event_Telented';
import Eventtestimonal from '../components/Event_testimonal';
import Eventtrailor from '../components/Event_trailor';
import Footer from '../components/Footer';
import Eventvideo from '../components/Event_video';
import Eventimg from '../components/Event-img';

function Events_only(){
    return (
        <>
         <Navbar />
         <div className='container' >
           
         <Eventimg name='Event name' img='https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80' when='20 jun' where='arts council karachi' onof='online' />
         <Eventvideo />
         <Eventwhy />
         <Eventshedule />
         <Eventreaches />
         <Eventtestimonal />
         <Eventregist />
         <Eventorgpartner />
         <EventTelented />
         <Eventtrailor />
        
         <Footer />
         </div>
        </>
    );
}

export default Events_only;

