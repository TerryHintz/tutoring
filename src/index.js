import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo';
import Tip from './Tip';
import Dice from './Dice';
import Events from './Events'
import Quiz from './quiz'
import Header from './header'
import Comp from './comp'
import Youtube from './Youtube'
import Website from './website'
import Toys from './toys'
import Root from './Root'
import Drawer from './Drawer'
import Menu from './Menu'
import Debugger from './debugger'
import Tabs from './tabs'
import Stack from './Stack'
import Queue from './Queue'
import QueueApp from './queueApp'
import Maze from './maze'
import Btn from './btn'
import Reminders from './reminders'
import Snackbar from './snackbar'
import MaterialSnackbar from './materialSnackbar'
import GuessingGame from './GuessingGame'
import AnimalSounds from './AnimalSounds'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AnimalSounds />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
