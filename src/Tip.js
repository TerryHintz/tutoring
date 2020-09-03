import React, { Component } from 'react';
import './App.css';

class Tip extends Component {

  state = {
    amount: '',
  }

  add = () => {
    let total = document.getElementById('total').value;
    total = parseFloat(total, 10);
    let percent;
    if (document.getElementById('10').checked == true){
      percent = 10;
    } else if (document.getElementById('12').checked == true){
      percent = 12;
    } else if (document.getElementById('15').checked == true){
      percent = 15;
    } else {
      let x = document.getElementById('custom-tip').value;
      percent = parseInt(x, 10);
    }
    let new_percent = percent / 100;
    let tip = new_percent*total;
    let new_tip = tip.toFixed(2);

    let final = parseFloat(total, 10) + parseFloat(new_tip, 10);
    
    this.setState({amount: final});
  }

  render() {
    return (
      <div className="root">
        <div>
          Enter Total
        </div>
        <div>
          <input id='total'/>
        </div>
        <br/>
        <div>
         Enter Tip Amount
        </div> 
        <div>
          <input id='10' name="x" type="radio"/>
          <span className='tip-percent'>10%</span>
        </div>
        <div>
          <input id='12' name="x" type="radio"/>
          <span className='tip-percent'>12%</span>
        </div>
        <div>
          <input id='15' name="x" type="radio"/>
          <span className='tip-percent'>15%</span>
        </div>
        <div>
          <input id='custom' name="x" type="radio"/>
          <span className='tip-percent'>Custom</span>
        </div>
        <div>
          <input id='custom-tip' placeholder="Enter Tip Percentage"/>
        </div>
        <br/>
        <span onClick={() => this.add()} className="ok-btn">Ok</span>
        <br/>
        <br/>
        <div>
          {this.state.amount}
        </div>
      </div>
    );
  }
}

export default Tip;