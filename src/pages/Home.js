import React from 'react';
import '../assets/Main.css';

import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Wellcome from '../components/Wellcome';
import Events from '../components/Events';
import Eventres from '../components/Event-b';
import Feature from '../components/features';
import SocialMedia from '../components/Social-media';
import Newslater from '../components/Newslater';
import Footer from '../components/Footer';




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
    <Eventres />
    
          
          
          <Feature.Admission img='https://thumbs.dreamstime.com/b/admissions-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-84943886.jpg' />
          <div className='whiteline'></div>
          <Feature.PresidentM  img='https://acpkhi.com/imgs/Ahmed%20Shah.webp' />
          <div className='whiteline'></div>
          <Feature.Production img='https://acpkhi.com/imgs/ACP%20Drone%202023.webp'  />
          <div className='whiteline'></div>
          <Feature.Acadmics img='https://acpkhi.com/imgs/academies.webp'  />
          <div className='whiteline'></div>
          <SocialMedia />
          <Newslater />
          <Footer />
    
          </div>
    
        </>
      );
   
}

export default Home;