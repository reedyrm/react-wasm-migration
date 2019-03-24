import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { add, hello, sub } from './utils/CommonUtils';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <div>Name: <input type='text' onChange={(e) => this.setState({name: e.target.value})} /></div>
            <div>{ hello(this.state.name) } </div>
          </div>
          <div>
            <div>Add: <input type='text' onChange={(e) => this.setState({addNum1: e.target.value})} /> <input type='text' onChange={(e) => this.setState({addNum2: e.target.value})} /></div>
            <div>Result: { add(this.state.addNum1, this.state.addNum2) }</div>
          </div>
          <div>
            <div>Sub: <input type='text' onChange={(e) => this.setState({subNum1: e.target.value})} /> <input type='text' onChange={(e) => this.setState({subNum2: e.target.value})} /></div>
            <div>Result: { sub(this.state.subNum1, this.state.subNum2) }</div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
