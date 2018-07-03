import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import MoviesPage from './MoviesPage'
import MoviesList from '../components/MovieList'
import MoviesForm from '../components/MovieForm'

describe('MoviePage', () => {
    const movies = []
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/movies/new' ]} >
            <MoviesPage movies={movies} />
        </MemoryRouter>
    )

    it('routes /movies/new to the movie form', () => {
        expect(wrapper.find(MoviesList)).toHaveLength(0)
        expect(wrapper.find(MoviesForm)).toHaveLength(1)
    })
})
