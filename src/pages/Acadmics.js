import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AcadmicsHero from '../components/Acadmicshero';
import Heros from '../components/features';
import AcadmicShowCard from '../components/Acadmic-ShowCard';

function Acadmics(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <AcadmicsHero title='Admision open' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' />
            <Heros.Admission />
            <AcadmicShowCard />
        <Footer />
        </div>
        </>
    )
    
}

export default Acadmics;