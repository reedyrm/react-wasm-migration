import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      wasm: {}
    };
  }
  
  componentDidMount() {
    this.loadWasm();
  }
  
  loadWasm = async () => {
    try {
      const wasm = await import('external');
      this.setState({wasm});
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };
  
  render() {
    const { wasm = {} } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div>Name: <input type='text' onChange={(e) => this.setState({name: e.target.value})} /></div>
            <div>{ wasm.hello && wasm.hello(this.state.name) } </div>
          </div>
          <div>
            <div>Add: <input type='text' onChange={(e) => this.setState({addNum1: e.target.value})} /> <input type='text' onChange={(e) => this.setState({addNum2: e.target.value})} /></div>
            <div>Result: { wasm.add && wasm.add(this.state.addNum1 || 0, this.state.addNum2 || 0) }</div>
          </div>
          <div>
            <div>Sub: <input type='text' onChange={(e) => this.setState({subNum1: e.target.value})} /> <input type='text' onChange={(e) => this.setState({subNum2: e.target.value})} /></div>
            <div>Result: { wasm.sub && wasm.sub(this.state.subNum1 || 0, this.state.subNum2 || 0) }</div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
