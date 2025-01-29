import React from 'react';
import '../assets/Main.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Admission(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-left-img flex-center'>
                <motion.div
                
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                
                className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></motion.div>
            </div>
            <motion.div
            
            initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            
            className='feature-right-content flex-column'>
                <h4 className="card-text">Admission</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <Link to="/academics"><button className='btn'>See more</button></Link>
            </motion.div>
        </div>
    );
}


function PresidentM(props) {
    return (
        <div className='feature-cont'>
            <motion.div
            
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
            
            className='feature-right-content flex-column'>
                <h4 className="card-text">President Message</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <Link to="/governing-body"><button className='btn'>See more</button></Link>
            </motion.div>
            <div className='feature-left-img flex-center'>
                <motion.div
                
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                
                className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></motion.div>
            </div>
        </div>
    );
}


function Production(props) {
    return (
        <div className='feature-cont'>
            <div className='feature-left-img flex-center'>
                <motion.div
                
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                
                className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></motion.div>
            </div>
            <motion.div
            
            
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
            className='feature-right-content flex-column'>
                <h4 className="card-text">Production</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <Link to="/our-team"><button className='btn'>See more</button></Link>
            </motion.div>
        </div>
    );
}


function Acadmics(props) {
    return (
        <div className='feature-cont'>
            <motion.div
            
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
            
            className='feature-right-content flex-column'>
                <h4 className="card-text">Acadmics</h4>
                <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <Link to="/academics"><button className='btn'>See more</button></Link>
            </motion.div>
            <div className='feature-left-img flex-center'>
                <motion.div
                
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                
                className='img-center'><img src={props.img} width='100%' height='100%' alt='' /></motion.div>
            </div>
        </div>
    );
}






const components = { Admission, PresidentM, Acadmics, Production };

export default components;
