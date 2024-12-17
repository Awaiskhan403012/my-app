import React from 'react';
import '../assets/Main.css';

function PriceCard(props) {
    return (
        <div className="pricecard">
            <img className="card-img-price" src={props.img} alt="Card cap" />
            <div className="price-card-body">
                <h3 className="Pricecard-title">{props.title}</h3>
                <h5 className="Pricecard-subtitle">{props.subtitle}</h5> 
                <p className="card-future">{props.future1}</p> 
                <p className="card-future">{props.future2}</p> 
                <p className="card-future">{props.future3}</p> 
            </div>
            <button className='btn'>Start Now</button>
        </div>
    );
}

export default PriceCard;