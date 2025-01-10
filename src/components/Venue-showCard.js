import React from 'react';
import '../assets/Main.css';
import '../assets/css/Blogpage.css';
import card from './Card';




// Import images for the slider
import venueImg1 from "../assets/venues/audi 1.webp";
import venueImg2 from "../assets/venues/audi 2.webp";
import venueImg3 from "../assets/venues/studio 1.webp";
import venueImg4 from "../assets/venues/studio 2.webp";
import venueImg5 from "../assets/venues/haseena moin.webp";
import venueImg6 from "../assets/venues/jaun elia.webp";
import venueImg7 from "../assets/venues/amiptheatre.webp";
import venueImg8 from "../assets/venues/cafe.webp";
import venueImg9 from "../assets/venues/art gallry.webp";
import venueImg10 from "../assets/venues/library.webp";
import venueImg11 from "../assets/venues/Rooftop.webp";
import venueImg12 from "../assets/venues/lobby.webp";
import venueImg13 from "../assets/venues/gulrang.webp";
import venueImg14 from "../assets/venues/audio-studio.webp";
import venueImg15 from "../assets/venues/parking.webp";

function ShowCard() {
    return (
        <>
        <h1 className='H-title'>Venues</h1>
            <div className='Card-cont'>
                
            <card.AdmCard
            title='Graphic designing'
            img={venueImg1}
            />
                        <card.AdmCard
            title='Graphic designing'
            img={venueImg2}
            />
                        <card.AdmCard
            title='Graphic designing'
            img={venueImg3}
            />
                                    <card.AdmCard
            title='Graphic designing'
            img={venueImg4}
            />
                                    <card.AdmCard
            title='Graphic designing'
            img={venueImg5}
            />

<card.AdmCard
            title='Graphic designing'
            img={venueImg6}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg7}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg8}
            />

<card.AdmCard
            title='Graphic designing'
            img={venueImg9}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg10}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg11}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg12}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg13}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg14}
            />


<card.AdmCard
            title='Graphic designing'
            img={venueImg15}
            />



            </div>
      </>
    );
}

export default ShowCard;