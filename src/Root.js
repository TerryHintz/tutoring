import React, { Component } from 'react';
import './App.css';
import Website from './website'
import Toys from './toys'

class Root extends Component {

  state = {
    page: ''
  }

  changePage = (x) => {
      this.setState({page: x});
  }
  
  render() {
    switch(this.state.page){
        case 'Home':
            return(
                <Website
                    changePage = {this.changePage}
                />
            );
        case 'Toys':
            return(
                <Toys
                    changePage = {this.changePage}
                />
            );
        default:
            return(
                <Website
                    changePage = {this.changePage}
                />
            )
    }
  }
}

export default Root;