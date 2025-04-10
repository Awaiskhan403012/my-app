import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const OurH = () => {

  const images = [
    'https://images.pexels.com/photos/30301026/pexels-photo-30301026/free-photo-of-illuminated-tokyo-tower-amidst-tokyo-skyline-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/29971353/pexels-photo-29971353/free-photo-of-serene-woodland-scene-in-english-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/30214968/pexels-photo-30214968/free-photo-of-traditional-moroccan-music-group-performing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/30186417/pexels-photo-30186417/free-photo-of-paragliding-adventure-over-scenic-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  return (

    <div className='AboutHero3'>
    <div className='hero-left'>
    <h1 className='H-title' style={{
      color: "white"
    }}>Our Team</h1>
    <h6 className='H-des' style={{
      color: "white",
      fontSize: "15px"
    }}>Starting from 29-jun 2025
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

export default OurH;
