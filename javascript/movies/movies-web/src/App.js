import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: null }
  }

  componentDidMount() {
    fetch('/movies')
    .then(resp => resp.json())
    .then(json => this.setState({ movies: json }))
  }

  render() {
    return (
      <Router>
        <main>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Movies!</h1>
            </header>

            <nav>
              <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
              <NavLink exact to='/movies' activeClassName='selected'>Movies</NavLink>
            </nav>

            <Route exact path='/' component={HomePage} />
            <Route path='/movies' render={
              () => <MoviesPage movies={this.state.movies} />
            }/>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
