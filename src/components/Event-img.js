import React from 'react';
import '../assets/Main.css';
function Eventcont(props) {
    return (
        <div className='Events-cont'>
            <div className='left'>
            <h1>{props.name}</h1>
            <button>Register Now</button>
            </div>
            <div className='right'>
            <div className='Event-info'>
                <div className='shape'>a</div>
                <h4 className='when-and-where'>{props.when}</h4>
                <h4 className='and-where'>{props.where}</h4>
                <h4 className='on-or-of'>{props.onof}</h4>
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
    );
}

export default Eventcont;