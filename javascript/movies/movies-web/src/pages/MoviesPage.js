import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieList from '../components/MovieList'
import Movie from '../components/Movie'

const handleSubmit = (event, onCreate) => {
    event.preventDefault()
    const form = event.target
    const title = form['movie[title]'].value
    const yearReleased = form['movie[yearReleased]'].value
    onCreate({ title, yearReleased })
}

const MovieForm = ({ movie, onCreate }) => {
    movie = movie || {}
    return (
        <div>
            <h4>Create a new movie</h4>
            <form onSubmit={(event) => handleSubmit(event, onCreate)}>
                <label>
                    <span>Title</span>
                    <input defaultValue={movie.title} name="movie[title]"/>
                </label>
                <label>
                    <span>Year Released</span>
                    <input defaultValue={movie.yearReleased} name="movie[yearReleased]"/>
                </label>
                <button type='submit'>Create!</button>
            </form>
        </div>
    )
}

const MoviesPage = ({ movies, onCreateMovie }) => {
    return (
        !!movies ? (
            <Switch>
                <Route path='/movies/new' render={
                    () => (<MovieForm onCreate={onCreateMovie} />)
                }/>

                <Route path='/movies/:id/edit' render={
                    ({ match }) => {
                        const { params: { id }} = match
                        const movie = movies.find(movie => movie._id === id)
                        return <MovieForm movie={movie} />
                    }
                }/>

                <Route path='/movies/:id' render={
                    ({ match: { params: { id }}}) => {
                        const movie = movies.find(movie => movie._id === id)
                        return (!!movie) ? (<Movie {...movie} />) : (<p>Unknown Movie</p>)
                    }
                } />

                <Route path='/movies' render={
                    () => (<MovieList items={movies} />)
                } />
            </Switch>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default MoviesPage