import React from 'react';
import '../assets/Main.css';

function PostCard(props) {
    return (
        <div className="Postcard">
            <img className="Post-card-img" src={props.img} alt="Card cap" />
            <div className="card-body">
                <h4 className="Postcard-text">{props.name}</h4> 
                <p className="Postcard-text">{props.post}</p> 
            </div>
        </div>
    );
}

export default PostCard;