import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: 'guest'
    }
  }
  login = () => {
    this.setState({
      user: 'admin'
    })
  }
  render() {
    return (
      <div className="App">
        <p>Hello, { this.state.user }</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default App;
