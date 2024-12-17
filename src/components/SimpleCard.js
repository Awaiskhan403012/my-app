import React from 'react';
import '../assets/Main.css';

function SimpleCard(props) {
    return (
        <div className="Simplecard">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <p className="card-text">{props.des}</p>
                <h6>learn more</h6>
            </div>
        </div>
    );
}

export default SimpleCard;