import React from 'react';
import '../assets/Main.css';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Wellcome from '../components/Wellcome';
import Events from '../components/Events';
import Feature from '../components/features';
import SocialMedia from '../components/Social-media';
import Newslater from '../components/Newslater';
import Footer from '../components/Footer';
import img from './moon.jpg';



function Home(){
   
    return (
        <>
          <Navbar />
          <div className='container' >
          <Landing />
          <Wellcome
          wellcome="Wellcome To Arts Council Karachi"
          subwellcome="Hub of Art & Culture"
          wellcometext="commutted to the promotionl, education and preservation of art"
          />
    
    <Events />
    
          <Feature.Admission img='hello' />
          <Feature.PresidentM  img='hello' />
          <Feature.Production img='hello'  />
          <Feature.Acadmics img='hello'  />
          <SocialMedia img={img} />
          <Newslater />
          <Footer />
    
          </div>
    
        </>
      );
   
}

export default Home;