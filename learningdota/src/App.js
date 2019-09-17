import React from 'react';

import './App.css';

import Particles from 'react-particles-js';
import Icon from './Components/Icon/Icon.js'
import SearchBox from './Components/SearchBox/SearchBox.js'
import CardList from './Components/CardList/CardList.js'
import {hero} from './Components/Cards/hero.js'

//Modifying properties of object of particle background
const params={
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 600
              }
            },
            "color":{
              "value":"#f71212" 
            },
            
          }
       } 

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
        searchField:'',
        hero:hero
    }
  }

//changing searchFiled state on changing values in searchBox
  onSearchChange=(event)=>
  {
    this.setState({searchField:event.target.value});
  }

  render()
  {
    ///Creating and storing the robots as per searchfiled value
    const filteredHero=this.state.hero.filter(hero=>{
        return hero.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      });

    
    return(
      <div>
          <Particles className='particle'
                              params={params}
                          />
          <Icon />
          <br/>
          <SearchBox onSearchChange={this.onSearchChange}/>
         <CardList hero={filteredHero}/>
      </div>
      );
  }
}

export default App;
