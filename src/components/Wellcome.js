import React from 'react';
function Wellcome(props){
    return(
        <>
            <div className="wellcome-container">
                <h1 className="wellcome-title">{props.wellcome}</h1>
                <h2 className="wellcome-subtitle">{props.subwellcome}</h2>
                <h4 className="wellcome-text">{props.wellcometext}</h4>
                
            </div>
        </>
    );
}

export default Wellcome;