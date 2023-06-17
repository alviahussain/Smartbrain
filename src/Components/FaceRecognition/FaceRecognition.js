import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center">
        <div className="absolute nt2">
            <img id='inputimage' alt='pic' src={imageUrl} width={"300px"} height='auto' />
            <div className="bounding-box" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
        </div>
        </div>
    );
}

export default FaceRecognition;