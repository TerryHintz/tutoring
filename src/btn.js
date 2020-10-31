import React, { Component } from 'react';
import './App.css';

class Btn extends Component {

  state = {
    number: 0,
  }

  componentDidMount(){
      this.bean(15, 59);
  }

  word = (x) => {
      let sCount = 0;
      let tCount = 0;

      

  }

  dictionary = () => {
    let dict = {};
    dict[0] = true;
    dict['hello'] = true;

    if(dict[0] == true){
      // do something
    }
  }

  increment=()=>{
      this.setState({number: this.state.number+1})
  }

  bean=(x, y)=>{
    let sum = x+ y;
    console.log(sum)
  }
  
  render() {
    return (
      <div>
          <h1>{this.state.number}</h1>
          <button onClick={()=>this.increment()}>
              click me!
          </button>
      </div>
    );
  }
}

export default Btn;