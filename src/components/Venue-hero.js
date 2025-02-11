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

    
    <motion.div
    
    
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    
    className="apps">
      <ImageSlider images={images} />
      <h1 className='landing-text'>Venues<br></br>
      <p className='paragraph'>Explore our amazing venues for events and gatherings</p>
    </h1>
    </motion.div>
    </div>
  

  );
};

export default venH;
