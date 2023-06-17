import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg'
//import Clarifai from 'clarifai';

//  const app = new Clarifai.App({
//   apiKey: 'f1e75c95aed441e4a87b6a524cdc5796',
// });

const returnClarifaiRequestOptions = (imageURL) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = '1b90bd19486f45faa6dd4b31b20c7483';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'alviahussain';       
  const APP_ID = 'test';
  // Change these to whatever model and image URL you want to use
  //const MODEL_ID = 'face-detection'; 
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

 const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};
return requestOptions
}
    
    

class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    
    this.setState({box: box})
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // app.models.predict('face-detection', 
    // "https://samples.clarifai.com/metro-north.jpg")
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifaiRequestOptions(this.state.input))
        .then(response => response.json())
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) //
    .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <ParticlesBg className="particles" color="#d779e9" num={100} type="cobweb" bg={true}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
    </div>
  );
  }
}

export default App;
