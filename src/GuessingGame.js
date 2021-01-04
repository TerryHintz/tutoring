import React, { Component } from 'react';
import './Guessing.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';

class GuessingGame extends Component {

  state = {
    feedback: 'Guess!',
    numberOfGuesses: 0,
    currentGuess: 0,
    randomNumber: 0,
    checked: false,
    snackbar: false,
    dialog: false,
    floor: 0,
    ceil: 0,
  }

  handleNewGame = () => {
    // get user inputed number from textfield + 1
    const input = parseInt(document.getElementById('random-num').value) + 1;
    // generate number between 0 and inputed number
    let rand = Math.floor(Math.random() * input);
    // check if user wants negatives included
    if(this.state.checked){
        // generate number 0 or 1
        const negative = Math.floor(Math.random() * 2);
        // turns number negative 50% of the time
        if(negative){
            // turns number negative
            rand = -Math.abs(rand);
        }
    }
    // get floor and ceil for dialog
    const ceil = parseInt(document.getElementById('random-num').value);
    let floor = 0;
    if(this.state.checked){
      floor = -Math.abs(ceil);
    }
    // set randomNumber equal to generated number
    this.setState({randomNumber: rand, feedback: 'Guess!', dialog: true, floor, ceil})
  }

  handleCheckBox = () => {
    this.setState({checked: !this.state.checked})
  }

  handlePlusMinus = (num) => {
    this.setState({currentGuess: this.state.currentGuess + num})
  }

  handleGuess = () => {
    this.setState({numberOfGuesses: this.state.numberOfGuesses + 1});
    if(this.state.currentGuess === this.state.randomNumber){
      this.setState({feedback: 'Correct!', snackbar: true});
    } else if(this.state.currentGuess > this.state.randomNumber) {
      this.setState({feedback: 'Lower!'});
    } else {
      this.setState({feedback: 'Higher!'});
    }
  }

  closeSnackbar = () => {
    this.setState({snackbar: false})
  }

  closeDialog = () => {
    this.setState({dialog: false})
  }
  
  render() {
    return (
      <div>
          <div className='title'>Start a game with a random number between X and Y</div>
          <div className='top-container'>
            <TextField id="random-num" className='input' size="small" label="Number" variant="outlined" />
            <Button onClick={()=>this.handleNewGame()} variant="contained" color="primary" className='btn-new-game'>
                New Game
            </Button>
          </div>
          <div className='top-container'>
            <Checkbox
                color="primary"
                checked={this.state.checked}
                onChange={() => this.handleCheckBox()}
            />
            <span>include negative numbers</span>
          </div>
          <div className='main-text'>{this.state.feedback}</div>
          <div className='top-container'>
            <Button onClick={()=>this.handlePlusMinus(-10)} className='btn-plus-minus' variant="contained" color="primary">-10</Button>
            <Button onClick={()=>this.handlePlusMinus(-1)} className='btn-plus-minus' variant="contained" color="primary">-</Button>
            <span className='currentGuess'>{this.state.currentGuess}</span>
            <Button onClick={()=>this.handlePlusMinus(+1)} className='btn-plus-minus' variant="contained" color="primary">+</Button>
            <Button onClick={()=>this.handlePlusMinus(+10)} className='btn-plus-minus' variant="contained" color="primary">+10</Button>
          </div>
          <div className='top-container'>
            <Button onClick={()=>this.handleGuess()} variant="contained" color="primary">Guess</Button>
          </div>
          <Snackbar
              open = {this.state.snackbar}
              anchorOrigin = {{
                  vertical: 'bottom',
                  horizontal: 'left'
              }}
              message = {'It took you ' + this.state.numberOfGuesses + ' guesses!' }
              onClose={() => this.closeSnackbar()}
              autoHideDuration={5000}
          />
          <Dialog 
            onClose={() => this.closeDialog()}
            open={this.state.dialog}>
            <div className='dialog'>{'Random number generated between ' + this.state.floor + ' and ' + this.state.ceil}</div>
          </Dialog>
      </div>
    );
  }
}

export default GuessingGame;