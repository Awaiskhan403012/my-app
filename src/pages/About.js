import React from 'react';
import '../assets/Main.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutHer1 from '../components/About-hero1';
import AboutHer2 from '../components/About-hero2';
import AboutHer3 from '../components/About-hero3';
import abimg from "../assets/images/about.jpg";



function Acadmics(){
    return(
        <>
        <Navbar />
        <div className='container' >
            <AboutHer1 title='About us' desc='Arts Council supports cultural activities while educating youth in the field of arts. It strives to promote literature, fine arts, and performing arts in Pakistan.' img={abimg} img2={abimg} />
            <AboutHer2 title='Mission' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' img='https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?t=st=1739272097~exp=1739275697~hmac=8dc3058e7b351872d9b788a8fa0cb04a635ecea537f64d8286d416fc88916e53&w=740' />
            <AboutHer3 title='Our Story' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' img='https://yourstory.tenement.org/assets/images/ysos-logo-square.svg' />
         

        <Footer />
        </div>
        </>
    )
    
}

export default Acadmics;