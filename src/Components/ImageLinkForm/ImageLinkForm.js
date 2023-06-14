import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f5 white-70">I'm here to detect faces in your pictures. Give me a try! </p>
            <div className="center">
                <div className="form center pa3 br3 shadow-5">
                <input className="textfield f4 pa2 w-70 center" type='text' />
                <button className="button w-30 grow f5 link ph3 pv2 dib white-80">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;