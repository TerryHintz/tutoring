import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import './App.css';

class MaterialSnackbar extends Component {

  state = {
    snackbar: false,
    error: false,
  }

  openSnackbar = () => {
      const text = document.getElementById('txt').value
      if(text === 'yes'){
        this.setState({snackbar: true})
      } else {
        this.setState({error: true})
      }
  }

  closeSnackbar = () => {
    this.setState({snackbar: false})
  }
  
  render() {
    return (
      <div>
            <div>Is Canada in North America?</div>
            <TextField
                id="txt" 
                label="Outlined" 
                variant="outlined" 
                error = {this.state.error}
            />
            <Button
                onClick = {() => this.openSnackbar()}
                variant="contained"
                color="primary"
            >
                Answer
            </Button>
            <Snackbar
                open = {this.state.snackbar}
                anchorOrigin = {{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                message = 'Correct!'
                onClose={() => this.closeSnackbar()}
                autoHideDuration={2000}
            />
            <Fab color="primary" aria-label="add">
                +
                {/* <img src='data:image/jpeg;base64,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'/> */}
            </Fab>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
      </div>
    );
  }
}

export default MaterialSnackbar;