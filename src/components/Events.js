import React from 'react';
import '../assets/Main.css';
function Events(){
    return(
        <>
        
            <div className="events-container flex-evenly">
               <div className="Ecard black">
                <h2 className="events-title">Upcoming <br /> Events</h2>
               </div>

               <div className="Ecardbrown">
                <button className="btnDark mar">Musics</button>
                <div className="blackmusic"><h5 className="events-title">Music Events Info</h5></div>
               </div>
               <div className="categoryBoxes flex-evenly flex-column">
               <div className='firstwhitebox flex-left flex-column'>
                <h5 className="events-title df">Category</h5>
                <h3 className="events-title df">Event Name</h3>
                <h6 className="events-title df">Event Orginizer</h6>
               
               </div>
               <div className='secondwhitebox col flex-left flex-column' > <h5 className="events-title df">Category</h5>
               <h3 className="events-title df">Event Name</h3>
               <h6 className="events-title df">Event Orginizer</h6>
               </div>
               </div>
            </div>
            
        </>
    );
}

export default Events;