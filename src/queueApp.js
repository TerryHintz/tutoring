import React, { Component } from 'react';
import './Queue.css';

class QueueApp extends Component {

  state = {
    number: 0,
    current: 0,
    queue: [],
  }

  add = () => {
    let name1 = document.getElementById('name').value;
    
    if(name1 == ""){
      alert("Blank Name!");
      return;
    }

    let num1 = this.state.number;
    let obj = {
        name: name1,
        num: num1,
    }
    let copy = this.state.queue;
    copy.push(obj);
    this.setState({number: this.state.number + 1, queue: copy});

    document.getElementById('name').value = "";
  }

  delete = (index) => {
    let copy = this.state.queue;

    const curr = copy[index].num;

    copy.splice(index, 1);
    this.setState({queue: copy, current: curr});
  }
  
  render() {
    return (
      <div className='queue-root'>
          <div className='half-screen'>
              <div className='display-panel'>{'Current Number: ' + this.state.current}</div>
              <div className='display-panel'>{'People in Line: ' + this.state.queue.length}</div>
              <div className='display-panel'>{'Wait Time: ' + this.state.queue.length * 10 + ' minutes'}</div>
          </div>
          <div className='half-screen'>
              <div>
                  <input id='name' placeholder='Name' className='queue-input' type='text'/>
                  <button onClick={() => this.add()}>ADD</button>
              </div>
              <div style={{marginTop: '20px'}}>
                  {this.state.queue.map((x, i)=>{
                      return (
                          <div onClick={() => this.delete(i)} className='queue-contain'>
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