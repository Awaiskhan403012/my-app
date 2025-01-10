import React from 'react';
import '../assets/Main.css';

function Admission(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-left-img flex-center'>
                <div className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></div>
            </div>
            <div className='feature-right-content flex-column'>
                <h4 className="card-text">Admission</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <button className='btn'>See more</button>
            </div>
        </div>
    );
}


function PresidentM(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-right-content flex-column'>
                <h4 className="card-text">President Message</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <button className='btn'>See more</button>
            </div>
            <div className='feature-left-img flex-center'>
                <div className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></div>
            </div>
        </div>
    );
}


function Production(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-left-img flex-center'>
                <div className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></div>
            </div>
            <div className='feature-right-content flex-column'>
                <h4 className="card-text">Production</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <button className='btn'>See more</button>
            </div>
        </div>
    );
}


function Acadmics(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-right-content flex-column'>
                <h4 className="card-text">Acadmics</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <button className='btn'>See more</button>
            </div>
            <div className='feature-left-img flex-center'>
                <div className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></div>
            </div>
        </div>
    );
}






const components = { Admission, PresidentM, Acadmics, Production };

export default components;
