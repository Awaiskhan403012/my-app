import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AcadmicsHero from '../components/Acadmicshero';
import VenuesShowCard from '../components/Venue-showCard';

function Venues(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <AcadmicsHero title='Venues' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' />
            <VenuesShowCard />
        <Footer />
        </div>
        </>
    )
    
}

export default Venues;