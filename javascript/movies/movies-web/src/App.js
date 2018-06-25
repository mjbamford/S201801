import React, { Component } from 'react';
import MovieList from './components/MovieList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: [] }
  }

  componentDidMount() {
    fetch('/movies')
    .then(resp => resp.json())
    .then(json => this.setState({ movies: json }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movies!</h1>
        </header>
        <MovieList items={this.state.movies} />
      </div>
    );
  }
}

export default App;
