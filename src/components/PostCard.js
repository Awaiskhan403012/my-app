import React from 'react';
import '../assets/Main.css';
import { motion } from 'framer-motion';

function PostCard(props) {
    return (
        <motion.div
        
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        
        
        className="Postcard">
            <img className="Post-card-img" src={props.img} alt="Card cap" />
            <div className="card-body">
                <h4 className="Postcard-text">{props.name}</h4> 
                <p className="Postcard-text">{props.post}</p> 
            </div>
        </motion.div>
    );
}

export default PostCard;