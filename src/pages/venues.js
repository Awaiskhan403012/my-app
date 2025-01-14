import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Venue-hero';
import VenuesShowCard from '../components/Venue-showCard';

function Venues(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <Hero />
            <VenuesShowCard />
        <Footer />
        </div>
        </>
    )
    
}

export default Venues;