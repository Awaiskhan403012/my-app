import React from 'react';
import Slider from 'react-slick';

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

const venH = () => {

  const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg',
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80',
    'https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
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
    <div className="apps">
      <ImageSlider images={images} />
    </div>
    </div>
   </div>

  );
};

export default venH;
