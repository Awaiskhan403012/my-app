import React from 'react';
import '../assets/Main.css';
import '../assets/css/Blogpage.css';
function Blogtitle(props) {
    return (
       <div className='BlogtitleCont'>
        <img src={props.img} />
        <h2>title {props.title}</h2>
        <h4>Description {props.des}</h4>
       </div>
    );
}

export default Blogtitle;