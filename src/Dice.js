import React, { Component } from 'react';
import './App.css';

class Dice extends Component {
  state = {
    number: 0,
  }

  roll = () => {
    let sides = document.getElementById('sides').value;
    // get integer inputed from user

    sides = parseInt(sides, 10);
    // this line isn't actually needed, compiler will automatically convert.
    
    if(sides === 0) {
        console.error('0 sided die not allowed');
        return;
    } else if (sides === 1){
        console.warn('1 sided die always returns 1!')
    }
    // the reason we use === here is because we did parseInt(),
    // guranteeing that we are comparing integers
    
    let random_number = Math.floor(Math.random() * sides) + 1;
    // random numebr from 1 to sides
    
    this.setState({number: random_number});
    // update state variable
  }

  render() {
    return (
      <div className="root">
          <div className="dice">{this.state.number}</div>
          <br/>
          <div>
              <input id='sides'/>
              <span onClick={()=>this.roll()} className='roll-btn'>Roll</span>
          </div>
      </div>
    );
  }
}

export default Dice;