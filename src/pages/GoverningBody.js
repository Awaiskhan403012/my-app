import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Governing-hero';
import Gnav from '../components/G-nav';
import GoverningShowcard from '../components/GoverningBody-showcard';

function GoverningBody(){
    return(
        <>
        <Navbar />
        <div className='container' >
            
            <Hero />
            <Gnav />
            <GoverningShowcard />
        <Footer />
        </div>
        </>
    )
    
}

export default GoverningBody;