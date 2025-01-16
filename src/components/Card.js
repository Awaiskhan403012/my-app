import React from 'react';
import '../assets/Main.css';
import { motion } from 'framer-motion';

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
        <img className="b-bl-img" src={props.img} alt='' />
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
        <motion.div
        
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        
        className="AdmCard">
            <img className="bl-img" src={props.img} alt="Card cap" />
            <div className="bl-body">
                <h4 className="card-text">{props.title}</h4> 

               <li href=''>see more</li>
            </div>
        </motion.div>
    );
}
export default { Card, BlogingCard, AdmCard };
