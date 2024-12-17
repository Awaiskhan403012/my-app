import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AcadmicsHero from '../components/Acadmicshero';
import OurteamShowcard from '../components/ourteamShowCard';

function GoverningBody(){
    return(
        <>
        <Navbar />
        <div className='container' >
            
            <AcadmicsHero title='Directors Messege' desc='hello this is 
            is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' />
            <OurteamShowcard />
        <Footer />
        </div>
        </>
    )
    
}

export default GoverningBody;