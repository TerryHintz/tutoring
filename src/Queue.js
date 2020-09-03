import React, { Component } from 'react';
import './App.css';

class Queue extends Component {

  state = {
    arr: [],
  }

  queuePush = (val) => {
    val = Math.floor(Math.random() * 10);
    let copy = this.state.arr;
    copy.push(val);
    this.setState({arr: copy});
  }
  
  queuePop = () => {
    
  }

  peek = () => {
    const nums = this.state.arr.length;
    console.log(this.state.arr[nums-1])
  }

  size = () => {
    const nums = this.state.arr.length;
    console.log(nums);
  }

  isEmpty = () => {
    const nums = this.state.arr.length;
    if(nums > 0){
        console.log(false);
    } else {
        console.log(true);
    }
  }
  
  render() {
    return (
      <div>
          {this.state.arr.map((x, index) => {
              return (
                <span key={index} className='stack-number'>{x}</span>
              )
          })}
          <div onClick={()=>this.queuePush()}>
              push
          </div>
          <div onClick={()=>this.peek()}>
              peek
          </div>
          <div onClick={()=>this.size()}>
              size
          </div>
          <div onClick={()=>this.isEmpty()}>
              isEmpty
          </div>
          <div onClick={()=>this.queuePop()}>
              pop
          </div>
      </div>
    );
  }
}

export default Queue;