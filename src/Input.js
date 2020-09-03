import React, {Component} from 'react';
import './App.css';
 
class Input extends Component {
    state = {
        firstName: '',
        lastName: '',
        isChecked: true,
        isChecked2: false,
        gender: '',
    }
 
    handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        this.setState({[name]: type == 'checkbox' ? checked : value});
    };
 
    render() {
        return(
            <div>
                <input type={'text'} name={'firstName'} value={this.state.firstName} onChange={this.handleInputChange}/>
                <input type={'text'} name={'lastName'} value={this.state.lastName} onChange={this.handleInputChange}/>
                <br/>
                <p>{this.state.firstName + ' ' + this.state.lastName}</p>
                <input type={'checkbox'} name={'isChecked'} checked={this.state.isChecked} onChange={this.handleInputChange} />
                <input type={'checkbox'} name={'isChecked2'} checked={this.state.isChecked2} onChange={this.handleInputChange} />
                <br/>
                <span>female</span>
                <input type={'radio'} name={'gender'} value={'female'} checked={this.state.gender === 'female'} onChange={this.handleInputChange}/>
                <span>male</span>
                <input type={'radio'} name={'gender'} value={'male'} checked={this.state.gender === 'male'} onChange={this.handleInputChange}/>
                <p>{this.state.gender}</p>
            </div>
        )
    }
}
 
export default Input;
 

