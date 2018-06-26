import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieList from '../components/MovieList'
import Movie from '../components/Movie'

export default ({ movies }) => {
    return (
        !!movies ? (
            <Switch>
                <Route path='/movies/:id' render={
                    ({ match: { params: { id } } }) => {
                        const movie = movies.find(movie => movie._id === id)
                        return (!!movie) ? (<Movie {...movie} />) : (<p>Unknown Movie</p>)
                    }
                } />

                <Route path='/movies' render={
                    () => (<MovieList items={movies} />)
                } />
            </Switch>
        ) : (
            <p>'Loading...</p>
        )
    )
}