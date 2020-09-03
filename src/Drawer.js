import React, { Component } from 'react';
import './App.css';

class Drawer extends Component {

  state = {
    open: true,
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div>
          <div style={{transform: this.state.open ? 'translateX(0px)' : 'translateX(-200px)'}} className='drawer'>
            <span onClick={()=>this.toggleDrawer()}>button</span>
            
          </div>
          <div>
            <span onClick={()=>this.toggleDrawer()}>button</span>
          </div>
          <img src='https://www.manitoulin.ca/wp-content/uploads/water.jpg'/>
          <img src='https://www.manitoulin.ca/wp-content/uploads/water.jpg'/>
          <img src='https://www.manitoulin.ca/wp-content/uploads/water.jpg'/>
      </div>
    );
  }
}

export default Drawer;