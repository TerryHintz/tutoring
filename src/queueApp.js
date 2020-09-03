import React, { Component } from 'react';
import './Queue.css';

class QueueApp extends Component {

  state = {
    number: 0,
    current: 0,
    lineSize: 0,
    waitTime: 0,
    queue: [],
  }

  add = () => {
    let name1 = document.getElementById('name').value;
    let num1 = this.state.number;
    let obj = {
        name: name1,
        num: num1,
    }
    let copy = this.state.queue;
    copy.push(obj);
    this.setState({number: this.state.number + 1, queue: copy});
  }
  
  render() {
    return (
      <div className='queue-root'>
          <div className='half-screen'>
              <div className='display-panel'>{'Current Number: ' + this.state.current}</div>
              <div className='display-panel'>{'People in Line: ' + this.state.lineSize}</div>
              <div className='display-panel'>{'Wait Time: ' + this.state.waitTime}</div>
          </div>
          <div className='half-screen'>
              <div>
                  <input id='name' placeholder='Name' className='queue-input' type='text'/>
                  <button onClick={() => this.add()}>ADD</button>
              </div>
              <div style={{marginTop: '20px'}}>
                  {this.state.queue.map((x)=>{
                      return (
                          <div className='queue-contain'>
                              <div style={{borderRight: '1px solid black'}} className='queue-inner'>{x.num}</div>
                              <div className='queue-inner'>{x.name}</div>
                          </div>
                      )
                  })}
              </div>
          </div>
      </div>
    );
  }
}

export default QueueApp;