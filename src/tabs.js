import React, { Component } from 'react';
import './App.css';

const pages = [
    {
        title: 'Youtube',
        content: 'This is youtube'
    },
    {
        title: 'Gmail',
        content: 'This is gmail'
    },
    {
        title: 'Google',
        content: 'This is google'
    },
    {
        title: 'Facebook',
        content: 'this is Facebook'
    }
]

class Tabs extends Component {

  state = {
    page: 'Youtube',
  }

  changePage = (y) => {
      this.setState({page: y});
  }
  
  render() {
    return (
      <div style={{display: 'flex', height: '100vh'}}>
          <div className='tabs-holder'>
              {pages.map((x) => {
                  return (
                      <div onClick={()=>this.changePage(x.title)} className='tabs'>
                          {x.title}
                      </div>
                  )
              })}
          </div>
          <div>
              {pages.map((x, index) => {
                  return (
                      <div>
                        {this.state.page == x.title &&
                            <div>
                                {pages[index].content}
                            </div>
                        }
                      </div>
                  )
              })}
          </div>
      </div>
    );
  }
}

export default Tabs;