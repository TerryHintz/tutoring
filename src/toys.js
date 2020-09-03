import React, { Component } from 'react';
import './App.css';
import Header from './header'

const img_link = 'https://image.shutterstock.com/image-vector/dog-bone-line-icon-vector-260nw-1228156243.jpg'

const toys = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxHWVdfsbpePlf09SqmtGqR0cMg_UylebojGZzwiAJncgQhRF3&usqp=CAU',
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
    {
        img: img_link,
        name: 'Bone',
        desc: 'this is a bone this is a bone this is a bone this is a bone this is a bone v this is a bone v v this is a bone'
    },
]

class Toys extends Component {

  state = {

  }
  
  render() {
    return (
      <div>
        <Header
            changePage = {this.props.changePage}
        />
        <div className='toys-root'>
            {toys.map((x)=>{
                return (
                    <div className='toy'>
                        <img className='toy-img' src={x.img}/>
                        <div className='toys-title'>{x.name}</div>
                        <div>{x.desc}</div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
}

export default Toys;