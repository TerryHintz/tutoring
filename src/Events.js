import React, { Component } from 'react';
import './App.css';

class Events extends Component {

  state = {
    word: 'default'
  }

  handleKeyPress = (event) => {
    console.log(event.key);
  }

  render() {
    return (
      <div>
        <input type={'text'} onKeyPress={(event) => this.handleKeyPress(event)}/>
        <div>{this.state.word}</div>
      </div>
    );
  }
}

export default Events;