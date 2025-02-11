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
                <b>Mohammad Ahmed Shah (HI , SI)</b><br></br><br></br>
"The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe."

- President, Arts Council of Pakistan, Karachi.
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
                We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
Some of our biggest events of the year include<br></br>
<br></br>

World Culture Festival<br></br>
Aalmi Urdu Conference<br></br>
Pakistan Literature Festival<br></br>
Pakistan Theatre Festival<br></br>
Pakistan Music Festival<br></br>
Women’s Conference<br></br><br></br>

We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
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
                ACPKHI houses multiple arts academies. Our core belief is nurturing young talents to become creative, accomplished individuals, bringing pride to our nation. With academies catering to those passionate about theatre, singing, music, dance and fine arts, textile design, communication design we train hundreds of students yearly and have continued to do so with expert instructors since 1954
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
