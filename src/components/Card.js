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
        <div className="b-BlogingCard flex-left flex-column">
        <img className="b-bl-img" src={props.img} alt="Blog image" />
        <div className="b-bl-body">
          <h4 className="b-card-text">{props.title}</h4>
          <p className="b-card-text">{props.description}</p>
          <p className="b-card-a">{props.tag}</p>
        </div>
        <div className='cate-date flex-evenly'>
          <p className="b-card-date">{props.date}</p>
          <p className="b-card-cat">{props.category}</p>
          </div>
      </div>
    );
}


function AdmCard(props) {
    return (
        <div className="BlogingCard  flex-column">
            <img className="bl-img" src={props.img} alt="Card cap" />
            <div className="bl-body">
                <h4 className="card-text">{props.title}</h4> 

               <a href=''>see more</a>
            </div>
        </div>
    );
}
export default { Card, BlogingCard, AdmCard };
