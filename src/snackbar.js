import React, { Component } from 'react';
import './App.css';

class Snackbar extends Component {

  state = {

  }

  snack = () => {
    document.getElementById('snack').style.display = 'block';
  }
  
  render() {
    return (
      <div style={{minHeight: '100vh'}}>
        <button onClick={() => this.snack()}>snack</button>
          <div>bppm</div>
          <div>bppm</div>
          <div>bppm</div>
          <div>bppm</div>
          <div>bppm</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div>bppmßß</div>
          <div id='snack' className='snack'>Hello</div>
      </div>
    );
  }
}

export default Snackbar;