import React from 'react';
function SocialMedia(props){
    return(
        <>
            <div className="Social-container">
            <div className="Simplecard">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Facebook</p>
                <h6>learn more</h6>
            </div>
        </div>



        <div className="Simplecard">
            
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Facebook</p>
                <h6>learn more</h6>
            </div>
        </div>


        <div className="Simplecard">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <p className="card-text">Facebook</p>
                <h6>learn more</h6>
            </div>
        </div>

            </div>
        </>
    );
}

export default SocialMedia;