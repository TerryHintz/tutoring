import React, { Component } from 'react';
import './App.css';

class Menu extends Component {

  state = {
    open: false,
    tab: 0,
  }

  toggleMenu = () => {
    this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div>
          <div>
              <span onClick={()=>this.toggleMenu()}>Menu</span>
          </div>
          <div style={{visibility: this.state.open ? 'visible' : 'hidden'}} className='dropdown'>
              <ul>
                  <li>English</li>
                  <li>French</li>
                  <li>Spanish</li>
              </ul>
          </div>
          <div className='extra'>hello</div>
          {this.state.tab == 0 &&
            <div>
                dskjahdkj
            </div>
          }
      </div>
    );
  }
}

export default Menu;