import React from 'react';
import '../assets/Main.css';
import '../assets/css/Responsive.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutHer1 from '../components/About-hero1';
import AboutHer2 from '../components/About-hero2';
import AboutHer3 from '../components/About-hero3';



function Acadmics(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <AboutHer1 title='About us' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas jgad   jhsgdj ganbsdasvg jhsagdjshsjkjsdhf' img='sd' img2='sd' />
            <AboutHer2 title='Mission' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' img2='sd' />
            <AboutHer3 title='Our Story' desc='hello this is is the tamas dgjashdg jhgdjsahdg sdgjashdhg jhgdjas kjsdhf' img='sd' img2='sd' />
         

        <Footer />
        </div>
        </>
    )
    
}

export default Acadmics;