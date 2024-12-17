import React from 'react';
import '../assets/Main.css';
import '../assets/css/Blogpage.css';
import card from './Card';
function ShowCard() {
    return (
        <>
        <h1 className='H-title'>Venues</h1>
            <div className='Card-cont'>
                
            <card.AdmCard
            title='Graphic designing'
            img='img'
            />
                        <card.AdmCard
            title='Graphic designing'
            img='img'
            />
                        <card.AdmCard
            title='Graphic designing'
            img='img'
            />
                                    <card.AdmCard
            title='Graphic designing'
            img='img'
            />
                                    <card.AdmCard
            title='Graphic designing'
            img='img'
            />

<card.AdmCard
            title='Graphic designing'
            img='img'
            />



            </div>
      </>
    );
}

export default ShowCard;