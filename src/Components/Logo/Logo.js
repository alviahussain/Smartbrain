import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './icons8-brain-100.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
          <Tilt className="w-10" >
      {<div className="Tilt" style={{padding: '0px', width: '110px', height: '110px', backgroundColor: "rgb(100,224,249,0.1)" }}>
      <div className="Tilt-inner center pa3">
        <img style={{paddingTop: '1px'}} alt='logo' src={brain}/></div>
      </div>}
      
    </Tilt>
        </div>
    );
}

export default Logo;