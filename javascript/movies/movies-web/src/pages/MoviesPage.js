import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieList from '../components/MovieList'
import Movie from '../components/Movie'
import MovieForm from '../components/MovieForm'

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