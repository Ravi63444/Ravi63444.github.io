import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

import  Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import  Logo from './Components/Logo/logo';
import ImageURL from './Components/ImageURL/ImageURL'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import SignUp from './Components/SignUp/SignUp';

import Clarifai from 'clarifai'

const params={
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 300
              }
            },
            "color":{
              "value":"#f71212" 
            }  
          },
    "interactivity": {
    
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  }

const app = new Clarifai.App({
 apiKey: '11767b19c29344dbbaadb1f40cde5ffc'
});


class App extends React.Component{
    constructor()
    {
      super();
      this.state={
        input:'',
        imageInput:'',
        box:{},
        routeStatus:'signedOut'
      }
    }

    calculateBox=(box)=>{
      
      const boxPara=box.outputs[0].data.regions[0].region_info.bounding_box
        const faceID=document.getElementById('face');
        const width=Number(faceID.width);
        const height=Number(faceID.height);
        return{
          leftCol: boxPara.left_col*width,
           rightCol:width-boxPara.right_col*width,
           topRow:boxPara.top_row*height,
           bottomRow:height-boxPara.bottom_row*height
        } 
    }

    setBox=(box)=>{
      this.setState({box:box})
    }

    onChange=(event)=>{
        this.setState({input:event.target.value})
    }

    onButtonClick=(event)=>{

      this.setState({imageInput:this.state.input})

      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response=>this.setBox(this.calculateBox(response)));

    }

    onRoute=(event)=>{
      
      this.setState({routeStatus:event});
    }


    render(){

        if(this.state.routeStatus==='signedOut')
        {
          return(
            <div className="App">
                  <Particles className='particle'
                              params={params}
                          />
              <SignIn onRoute={this.onRoute}/>
              </div>
            );
        }
        else if(this.state.routeStatus==='signedIn')
        {
          return(
            <div className="App">
                  <Particles className='particle'
                              params={params}
                          />
                  <Navigation onRoute={this.onRoute}/>
                  <Logo />
                  <ImageURL onChange={this.onChange} onButtonClick={this.onButtonClick}/>
                  <FaceRecognition imageInput={this.state.imageInput} box={this.state.box}/>
              </div>
            );
        }
        else if(this.state.routeStatus==='register')
        {
          return(
              <div className="App">
                  <Particles className='particle'
                              params={params}
                          />
              <SignUp onRoute={this.onRoute}/>
              </div>
            );
        }
      };
 
}
export default App;