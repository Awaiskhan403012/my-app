import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Our-team-hero';
import OurteamShowcard from '../components/ourteamShowCard';
function GoverningBody(){
    return(
        <>
        <Navbar />
        <div className='container' >
            
            <Hero />
            <OurteamShowcard />
        <Footer />
        </div>
        </>
    )
    
}

export default GoverningBody;