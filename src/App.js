import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    word: "chicken",
    weekend: true,
    mood: "neutral",
    temp: "neutral",
    red: 0,
    blue: 0,
    color: "purple",
  }

  click = (x) => {
    
  }

  increase = (x) => {
    if (x == "red"){
      console.log(this.state.red);
      this.setState({red: this.state.red + 1});
    } else if (x == "blue"){
      console.log(this.state.blue);
      this.setState({blue: this.state.blue + 1});
    }

    if(this.state.blue > this.state.red){
      this.setState({color: "blue"});
    } else {
      this.setState({color: "red"});
    }
  }

  render() {
    return (
      <div className="root">
        
        <div>{"my favourite colour is " + this.state.color}</div>
        <div onClick={() => this.increase("red")} className="red-button">Red</div>
        <div onClick={() => this.increase("blue")} className="blue-button">Blue</div>
      </div>
    );
  }
}

export default App;