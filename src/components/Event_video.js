import React from 'react';
import '../assets/Main.css';
function Event_video() {
    return (
       <div className='Video-main-cont'>
        <div className='video-left flex-column'>
            <h6>About Event</h6>
            <h3>Event name</h3>
            <p>Description</p>
            <div className='des-div'>
                
            </div>
            <div className='row-ev'>
            <div className='location-icon'></div>
                <div className='wher-and'></div>
                <div className='on-or-of'>on or off</div>
            
            </div>
            <button>Join Now</button>
        </div>
        <div className='video-right flex-column'>
           
            <div className='promotion-video'>
               
            </div>
        </div>
       </div>
    );
}

export default Event_video;