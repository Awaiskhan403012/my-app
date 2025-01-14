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
            <AboutHer1 title='About us' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing jhsagdjshsjkjsdhf' img='https://www.moldech.com/wp-content/uploads/2023/02/AboutUs.jpg' img2='https://www.moldech.com/wp-content/uploads/2023/02/AboutUs.jpg' />
            <AboutHer2 title='Mission' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' img='https://www.projectmanager.com/wp-content/uploads/2018/11/181112_Blog_Feature_Mission.jpg' />
            <AboutHer3 title='Our Story' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' img='https://yourstory.tenement.org/assets/images/ysos-logo-square.svg' />
         

        <Footer />
        </div>
        </>
    )
    
}

export default Acadmics;