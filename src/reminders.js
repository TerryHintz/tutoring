import React, { Component } from 'react';
import './App.css';

class Reminders extends Component {

  state = {

  }

  click = () => {
      const what = document.getElementById('what').value;

      if(what === ''){
          alert('no task entered');
          return;
      }

      const month = document.getElementById('month').value - 1;
      const day = document.getElementById('day').value;
      const hours = document.getElementById('hours').value;
      const minutes = document.getElementById('minutes').value;

      
    
      let reminderDate = new Date();
      reminderDate.setMonth(month);
      reminderDate.setDate(day);
      reminderDate.setHours(hours);
      reminderDate.setMinutes(minutes);
      reminderDate.setSeconds(0);
      var parsedDate = Date.parse(reminderDate);
      let curr = Date.now();
      let diff = parsedDate - curr;
      if(diff < 0){
          alert('You entered a time in the past');
          return;
      }

    setTimeout(function(){ alert(what); }, diff);
  }
  
  render() {
    return (
      <div style={{textAlign: 'center'}}>
          <div>What to remind?</div>
          <input id='what'></input>
          {/* <div>In how many seconds?</div>
          <input id='when'></input> */}
          <div>Month</div>
          <input id='month'></input>
          <div>Day</div>
          <input id='day'></input>
          <div>Hours</div>
          <input id='hours'></input>
          <div>Minutes</div>
          <input id='minutes'></input>
          <div>
            <button onClick={()=>this.click()}>Set</button>
          </div>
      </div>
    );
  }
}

export default Reminders;