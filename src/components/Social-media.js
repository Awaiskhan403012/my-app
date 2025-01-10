import React from 'react';
function SocialMedia(){
    return(
        <>
            <div className="Social-container">
            <div className="Simplecard">
            <img className="card-img-top" src='https://www.fubiz.net/wp-content/uploads/2010/11/013-550x777.jpg' alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Facebook</p>
                <h6>learn more</h6>
            </div>
        </div>



        <div className="Simplecard">
            
            <img className="card-img-top" src='https://img.lovepik.com/background/20211027/large/lovepik-red-poster-background-image_401671559.jpg' alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Youtube</p>
                <h6>learn more</h6>
            </div>
        </div>


        <div className="Simplecard">
            <img className="card-img-top" src='https://i.pinimg.com/originals/cb/38/f6/cb38f68c8061a1ee871e2c518d67022f.jpg' alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Twitter</p>
                <h6>learn more</h6>
            </div>
        </div>

            </div>
        </>
    );
}

export default SocialMedia;