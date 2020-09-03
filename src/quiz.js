import React, { Component } from 'react';
import './App.css';
import Rect from './comp.js'

const questionsList = [
    {
        question: 'What Color is a banana',
        a: 'yellow',
        b: 'green',
        c: 'red',
        d: 'blue',
        correct: 'a',
    },
    {
        question: 'What Color is the sky',
        a: 'yellow',
        b: 'green',
        c: 'red',
        d: 'blue',
        correct: 'd',
    },
]

class Quiz extends Component {

  state = {
    answer: [],
  }
  
  componentDidMount(){
      let answer_temp = [];
      let i = 0;
      for(i; i<questionsList.length; i++){
          answer_temp.push('');
      }
      this.setState({answer: answer_temp});
  }

  update = (ans, index) => {
    let answer_temp = this.state.answer;
    answer_temp[index] = ans;
    this.setState({answer: answer_temp});
  }

  finish = () => {
    let i = 0;
    let score = 0;
    const max = questionsList.length;
    for(i; i<questionsList.length; i++){
        if(questionsList[i].correct == this.state.answer[i]){
            score++;
        }
    }
    console.log(score)
  }

  render() {
    return (
      <div>
          {questionsList.map((x, index) => {
              return (
                  <div>
                      <div>{x.question}</div>
                      <div>
                        <input onClick={() => this.update('a', index)} type='radio' name={x.question}/>
                        <span>{x.a}</span>
                      </div>
                      <div>
                        <input onClick={() => this.update('b', index)} type='radio' name={x.question}/>
                        <span>{x.b}</span>
                      </div>
                      <div>
                        <input onClick={() => this.update('c', index)} type='radio' name={x.question}/>
                        <span>{x.c}</span>
                      </div>
                      <div>
                        <input onClick={() => this.update('d', index)} type='radio' name={x.question}/>
                        <span>{x.d}</span>
                      </div>
                  </div>
              )
          })}
          <div>
              <span onClick={() => this.finish()}>ok</span>
              <Rect/>
              <Rect/>
              <Rect/>
              <Rect/>
          </div>
      </div>
    );
  }
}

export default Quiz;