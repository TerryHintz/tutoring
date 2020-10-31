import React, { Component } from 'react';
import './Maze.css';

const rows = 15;
const cols = 25;

class Maze extends Component {

  state = {
    maze: [],
    x: 0,
    y: 0,
    wall: true,
    blocks: 3,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKey)

    const maze = this.randomize(rows, cols);
    this.setState({maze: maze});
    console.log(maze);
  }

  handleKey = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
    let copy = this.state.maze;
    let x = this.state.x;
    let y = this.state.y;
    if(key == 's' || keyCode == '40'){
      if(y >= rows-1){
        return;
      } else if (copy[y+1][x] == 1){
        if(!this.state.wall){
          copy[y][x] = 0;
          x = this.state.startX;
          y = this.state.startY-1;
          copy[this.state.startY][this.state.startX] = 2;
        } else {
          return;
        }
      } else {
        copy[y+1][x] = 2;
        copy[y][x] = 0;
      }
      y++;
    } 
    else if(key == 'w' || keyCode == '38'){
      if(y <= 0){
        return;
      } else if(copy[y-1][x] == 1){
        if(!this.state.wall){
          copy[y][x] = 0;
          x = this.state.startX;
          y = this.state.startY+1;
          copy[this.state.startY][this.state.startX] = 2;
        } else {
          return;
        }
      } else {
        copy[y-1][x] = 2;
        copy[y][x] = 0;
      }
      y--;
    }
    else if(key == 'a' || keyCode == '37'){
      if(x <= 0){
        return;
      } else if(copy[y][x-1] == 1){
        if(!this.state.wall){
          copy[y][x] = 0;
          x = this.state.startX+1;
          y = this.state.startY;
          copy[this.state.startY][this.state.startX] = 2;
        } else {
          return;
        }
      } else {
        copy[y][x-1] = 2;
        copy[y][x] = 0;
      }
      x--;
    }
    else if(key == 'd' || keyCode == '39'){
      if(x >= cols - 1){
        return;
      } else if(copy[y][x+1] == 1){
        if(!this.state.wall){
          copy[y][x] = 0;
          x = this.state.startX-1;
          y = this.state.startY;
          copy[this.state.startY][this.state.startX] = 2;
        } else {
          return;
        }
      } else {
        copy[y][x+1] = 2;
        copy[y][x] = 0;
      }
      x++;
    }
    this.setState({maze: copy, x: x, y: y});
    if(x == this.state.endX && y == this.state.endY){
      alert("You won!");
    }
  }

  randomize = (x, y) => {
    let arr = [];

    for(let i=0; i<x; i++){
      let inner = [];
      for(let j=0; j<y; j++){
        // random number 1 - 10
        const rand = Math.floor(Math.random() * 10) + 1;
        if(rand >= this.state.blocks){
          inner.push(0);
        } else {
          inner.push(1);
        }
      }
      arr.push(inner);
    }

    const startX = Math.floor(Math.random() * cols);
    const startY = Math.floor(Math.random() * rows);
    const endX = Math.floor(Math.random() * cols);
    const endY = Math.floor(Math.random() * rows);

    arr[startY][startX] = 2;
    arr[endY][endX] = 3;

    this.setState({startX: startX, startY: startY, endX: endX, endY: endY, x: startX, y:startY});

    return arr;
  }

  handleRandom = () => {
    const maze = this.randomize(rows, cols);
    this.setState({maze: maze});
  }

  toggleWallLava = () => {
    this.setState({wall: !this.state.wall})
  }

  moreBlocks = () => {
    this.setState({blocks: this.state.blocks + 1});
    const maze = this.randomize(rows, cols);
    this.setState({maze: maze});
  }

  lessBlocks = () => {
    this.setState({blocks: this.state.blocks - 1});
    const maze = this.randomize(rows, cols);
    this.setState({maze: maze});
  }
  
  render() {
    return (
      <div>
        <div>
          <button className='btn' onClick={() => this.handleRandom()}>Random</button>
          <button className='btn' onClick={() => this.toggleWallLava()}>{this.state.wall ? 'Wall Mode On' : 'Lava Mode On'}</button>
          <button className='btn' onClick={() => this.moreBlocks()}>More Blocks</button>
          <button className='btn' onClick={() => this.lessBlocks()}>Less Blocks</button>
        </div>

        <div>
          {this.state.maze.map((x) => {
            return (
              <div className='outer'>
                {x.map((y) => {
                  var color;
                  if(y==0){
                    color = 'white';
                  } else if(y==1){
                    if(this.state.wall){
                      color = 'cornflowerblue';
                    } else {
                      color = 'indianred';
                    }
                  } else if(y==2){
                    color = 'limegreen'
                  } else {
                    color = 'lightpink';
                  }
                  return (
                    // conditional styling, if y is 1 then black, otherwise white
                    <div style={{backgroundColor: color }} className='square'></div>
                  )
                })}
              </div>
            )
          })}
          </div>
      </div>
    );
  }
}

export default Maze;