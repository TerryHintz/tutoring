import React, { Component } from 'react';
import './App.css';

class Todo extends Component {

  state = {
    list: [],
  }

  componentDidMount(){
    let x = localStorage.getItem('list');
    let y = JSON.parse(x);
    this.setState({list: y});
  }

  delete = (x) => {
    let y = this.state.list.indexOf(x);
    let list_copy = this.state.list;
    list_copy.splice(y, 1);
    this.setState({list: list_copy});
    
    let z = JSON.stringify(this.state.list);
    localStorage.setItem('list', z);
  }

  add = () => {
    let x = document.getElementById('task').value;
    let copy = this.state.list;
    copy.push(x);
    this.setState({list: copy});

    document.getElementById('task').value = '';

    let y = JSON.stringify(this.state.list);
    localStorage.setItem('list', y);
  }

  render() {
    return (
      <div className="root">
          {this.state.list.map((items) => {
            return(
              <div>
                <span className="item">{items}</span>
                <span onClick={() => this.delete(items)} className="x-button">x</span>
              </div>
            )
          })}
          <br/>
          <div>
           <input id="task"></input>
           <span className="add-btn" onClick={() => this.add()}>add</span>
          </div>
          
      </div>
    );
  }
}

export default Todo;