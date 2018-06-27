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

  handleCreateMovie = (movie) => {
    // Accept new movie properties - DONE
    // Save it to the api - DONE
    // Add the newly created movie to the state - DONE
    fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(json => { console.dir(json); return Promise.resolve(json) })
    .then(movie => {
      this.setState((prevState) => {
        // Don't manipulate data structures within the state.
        // Notify React of state changes, passing new data structures.
        const allMovies = [ movie ].concat(prevState.movies)
        return { movies: allMovies }
      }) 
    })
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
              <NavLink exact to='/movies/new' activeClassName='selected'>Create a Movie!</NavLink>
            </nav>

            <Route exact path='/' component={HomePage} />
            <Route path='/movies' render={
              () => <MoviesPage movies={this.state.movies} onCreateMovie={this.handleCreateMovie} />
            }/>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
