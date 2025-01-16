import React from 'react';
import '../assets/Main.css';

function SimpleCard(props) {
    return (
        <div className="Simplecard">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-content">
      <h2 className="card-title">{props.title}</h2>
      <button className="card-button">Learn More</button>
    </div>
        </div>
    );
}

export default SimpleCard;