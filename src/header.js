import React, { Component } from 'react';
import './App.css';

const obj = {
  title: 'Buy Banana',
  done: false,
}

class Header extends Component {

  state = {

  }
  
  render() {
    return (
      <div className='header-root'>
          <div>
            <img className='cat-logo' onClick={()=>this.props.changePage('Home')} src='https://assets.monstercat.com/essentials/logos/monstercat_logo_cat_normal.png'/>
          </div>
          <div className='right-container'>
            <span className='pages'>Cat</span>
            <span className='pages'>Activities</span>
            <span className='pages' onClick={()=>{this.props.changePage('Toys')}}>Toys</span>
            <span className='pages'>Items</span>
          </div>
      </div>
    );
  }
}

export default Header;