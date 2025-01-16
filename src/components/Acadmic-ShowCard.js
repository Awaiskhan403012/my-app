import React from 'react';
import '../assets/Main.css';
import card from './Card';
function ShowCard() {
    return (
        <>
        <h1 className='H-title'>Department</h1>
            <div className='Card-cont'>
                
            <card.AdmCard
            title='Graphic designing'
            img='https://www.artscouncil.org.pk/wp-content/uploads/2023/12/Haq-Tu-YeHai-Ke-Haq-Ida-Na-Hua-Painting-Exhibition-by-Ali-Azmat-at-Arts-Council-of-Pakistan-Karachi-2.jpg'
            />
                        <card.AdmCard
            title='Dance'
            img='https://www.artscouncil.org.pk/wp-content/uploads/2019/05/58655506_1005549289834176_3181640450649882624_n.jpg'
            />
                        <card.AdmCard
            title='Fine arts'
            img='https://www.artscouncil.org.pk/wp-content/uploads/2023/05/Arts-Council-of-Pakistan-Karachi-organized-an-exhibition-of-artworks-of-art-school-students-at-Full-Circle-Art-Gallery-3.jpg'
            />
                                    <card.AdmCard
            title='Music'
            img='https://www.artscouncil.org.pk/wp-content/uploads/2024/07/Grand-Meetup-of-the-Youth-Ambassador-Programme-at-Arts-Council-20-1024x683.jpg'
            />
                                    <card.AdmCard
            title='Textile designing'
            img='https://www.artscouncil.org.pk/wp-content/grand-media/image/DSC_2477.jpg'
            />

<card.AdmCard
            title='Theater'
            img='https://www.artscouncil.org.pk/wp-content/uploads/2023/09/16th-Day-of-Pakistan-Theater-Festival-Plays-Social-Pagal-and-The-Father-2.jpg'
            />



            </div>
      </>
    );
}

export default ShowCard;