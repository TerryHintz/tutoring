import React, { Component } from 'react';
import './App.css';
import Header from './header'

class Website extends Component {

  state = {

  }
  
  render() {
    return (
      <div>
          <Header
            changePage = {this.props.changePage}
          />
          <div className='cat-root'>
              <div>
                <div className='cat-name'>High Lord Kittens</div>
                <div className='cat-descrip'>
                    My cats name is Kitty, it does this that blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balhv blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh blah balh
                </div>
              </div>
              <div>
                <img style={{width: '50vw'}} src='https://i.pinimg.com/originals/39/4d/67/394d679c34ce0e4aa67a462c8aa2acab.jpg'/>
              </div>
          </div>
      </div>
    );
  }
}

export default Website;