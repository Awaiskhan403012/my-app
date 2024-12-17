import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AcadmicsHero from '../components/Acadmicshero';
import Gnav from '../components/G-nav';
import GoverningShowcard from '../components/GoverningBody-showcard';

function GoverningBody(){
    return(
        <>
        <Navbar />
        <div className='container' >
            
            <AcadmicsHero title='Presidents Messege' desc='hello this is 
            is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' />
            <Gnav />
            <GoverningShowcard />
        <Footer />
        </div>
        </>
    )
    
}

export default GoverningBody;