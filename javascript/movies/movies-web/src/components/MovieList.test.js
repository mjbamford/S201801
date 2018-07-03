import React from 'react'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'
import MovieList from './MovieList'
import Movie from './Movie'

describe('MovieList', () => {
    const movies = [
        { _id: 1, title: 'One' },
        { _id: 2, title: 'Two' }
    ]

    it('works', () => {
        const wrapper = mount(
            <MemoryRouter>
                <MovieList items={movies} />
            </MemoryRouter>
        )
        expect(wrapper.find(Movie)).toHaveLength(2)
        expect(wrapper.contains(<Movie _id={1} title="One"/>)).toEqual(true)
    })
})