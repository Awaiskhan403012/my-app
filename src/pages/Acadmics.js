import React from 'react';
import '../assets/Main.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AcadmicsHero from '../components/Acadmicshero';
import Feature from '../components/features';
import AcadmicShowCard from '../components/Acadmic-ShowCard';

function Acadmics(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <AcadmicsHero title='Admision open' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' />
            <Feature.Admission img='https://1ststep.pk/cdn/shop/files/6_ad59d255-a4ec-4b7e-bde5-f3abab93952a_2048x.jpg?v=1704113247' />
            <AcadmicShowCard />
        <Footer />
        </div>
        </>
    )
    
}

export default Acadmics;