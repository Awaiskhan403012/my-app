import React, {useState} from 'react';
import '../assets/Main.css';


function EventList() {


    const [isVisible, setIsVisible] = useState(false);

    // Toggle height when button is clicked
    const toggleHeight = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='Event-list-comp'>
            <div className='Event-list-header flex-betw'>
                <div className='price-ev'>
                    <div className='Event-list-price'>4000</div>
                    <h6 className='Event-list-name'>Buy  now</h6>
                </div>
                <div className='Event-list-pos'>f</div>
                <div>
                    <h6 className='Event-list-name'>Name</h6>
                    <h6 className='Event-list-name'>Position</h6>
                </div>
                <h6 className='Event-list-name'>Cleo chapter 1</h6>
                <div className='Event-list-min'><button onClick={toggleHeight} className='btn'>{isVisible ? "-" : "+"}</button></div>
            </div>
         
    {isVisible && (
        <>
            <div className='Event-list-des'>
                <h2>Description</h2>
                <p className='des'>This is the description</p>
            </div>
            <div className='Event-list-img'>

                <img width='100%' height='100%' src='' alt='' />
            </div>
            <div className='Event-list-footer flex-evenly'>
            <h6 className='Event-list-name'>Time</h6>
            <h6 className='Event-list-name'>Date</h6>
            <h6 className='Event-list-name'>Location</h6>

            </div>
        </>
    )}

        </div>

    );
}

export default EventList;