import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SignInForm from './components/SignInForm'
import * as moviesApi from './api/movies'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: null,
      token: localStorage.getItem('token')
    }
  }

  handleLogIn = (token) => {
    localStorage.setItem('token', token)
    moviesApi.list({ token })
    .catch(resp => [])
    .then(movies => this.setState({ movies, token }))
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState(prevState => ({
      movies: prevState.movies,
      token: null
    }))
  }

  handleCreateMovie = (movie) => {
    const api = (!!movie._id) ? moviesApi.update : moviesApi.create
    const token = this.state.token

    api({ token, movie })
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
    return moviesApi.list({ token: this.state.token })
      .catch(resp => [])
      .then(movies => this.setState({ movies }))
  }

  render() {
    const isSignedIn = () => {
      return !!this.state.token
    }

    return (
      <Router>
        <main>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Movies!</h1>
            </header>

            <nav>
              <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
              {
                isSignedIn() ? (
                  <NavLink to='/signout' onClick={this.handleLogOut} activeClassName='selected'>Sign Out</NavLink>
                ) : (
                  <NavLink to='/signin' activeClassName='selected'>Sign In</NavLink>
                )
              }
              <NavLink exact to='/movies' activeClassName='selected'>Movies</NavLink>
              <NavLink exact to='/movies/new' activeClassName='selected'>Create a Movie!</NavLink>
            </nav>

            <Route exact path='/' component={HomePage} />

            <Route path='/movies' render={
              () => <MoviesPage movies={this.state.movies} onCreateMovie={this.handleCreateMovie} />
            }/>

            <Route path='/signin' render={
              () => (
                isSignedIn() ? (
                    <Redirect to='/movies' />
                ) : (
                    <SignInForm onLogIn={this.handleLogIn} />
                )
              )
            }/>

            <Route path='/signout' render={
              () => (<Redirect to='/signin' />)
            }/>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
