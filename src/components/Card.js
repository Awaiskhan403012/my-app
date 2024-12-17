import React from 'react';
import '../assets/Main.css';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <h4 className="card-text">{props.title}</h4> 
                <p className="card-text">{props.description}</p> 
            </div>
        </div>
    );
}


function BlogingCard(props) {
    return (
        <div className="BlogingCard flex-center flex-column">
            <img className="bl-img" src={props.img} alt="Card cap" />
            <div className="bl-body">
                <h4 className="card-text">{props.title}</h4> 
                <p className="card-text">{props.description}</p>
                <p className="card-a">{props.tag}</p> 
                <p className="card-date">{props.date}</p> 
                <p className="card-cat">{props.category}</p> 
            </div>
        </div>
    );
}


function AdmCard(props) {
    return (
        <div className="BlogingCard flex-center flex-column">
            <img className="bl-img" src={props.img} alt="Card cap" />
            <div className="bl-body">
                <h4 className="card-text">{props.title}</h4> 

               <a href=''>see more</a>
            </div>
        </div>
    );
}
export default { Card, BlogingCard, AdmCard };
