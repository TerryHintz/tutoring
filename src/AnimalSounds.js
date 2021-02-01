import React, { Component } from 'react';
import './App.css';

class AnimalSounds extends Component {

  state = {
    dog: new Audio(require('./Sounds/dog.mp3')),
  }

  componentDidMount(){
      
  }

  dog = () => {
    this.state.dog.play();
  }
  
  render() {
    return (
      <div>
          <button onClick={()=>this.dog()}>Dog</button>
      </div>
    );
  }
}

export default AnimalSounds;