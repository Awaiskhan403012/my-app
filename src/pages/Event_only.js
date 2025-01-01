import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
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

function Events_only(){
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

