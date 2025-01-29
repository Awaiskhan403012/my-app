import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import venueImg1 from "../assets/venues/audi 1.webp";
import venueImg2 from "../assets/venues/audi 2.webp";
import venueImg3 from "../assets/venues/studio 1.webp";
import venueImg4 from "../assets/venues/studio 2.webp";
import venueImg5 from "../assets/venues/haseena moin.webp";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,                 
    infinite: true,              
    speed: 500,        
    slidesToShow: 1,     
    slidesToScroll: 1,       
    autoplay: true,  
    autoplaySpeed: 3000,   
    arrows: true,   
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const venH = () => {

  const images = [
    venueImg1,
    venueImg2,
    venueImg3,
    venueImg4,
    venueImg5,
    
  ];

  return (

    <div className='AboutHero3'>
    <div className='hero-left'>
    <h1 className='H-title'>Over Top Venues</h1>
    <h6 className='H-des'>Starting from 29-jun 2025
    The tetracycline antibiotics block microbial translation and constitute an important group of antimicrobial agents that find broad clinical utility.
    </h6>
    </div>
    <div className='Ab-hero-right'>
    <motion.div
    
    
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    
    className="apps">
      <ImageSlider images={images} />
    </motion.div>
    </div>
   </div>

  );
};

export default venH;
