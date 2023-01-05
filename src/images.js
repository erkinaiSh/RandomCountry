import React from 'react';
import img1 from './images/romania-flag.jpg';
import "./images.css";

function Imagess(){
    return(
        <div>
            <h1>ROMANIA</h1>
            <img class='cntryflag' src={img1} alt='image'/>
        </div>
    )
}

export default Imagess;