import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Movie from './Movie'

describe('Movie', () => {
    const attrs = { _id: 666, title: 'Title', yearReleased: 1990 }
    const movie = renderer.create(
        <MemoryRouter>
            <Movie {...attrs} />
        </MemoryRouter>
    )
    it('displays the title and yearReleased', () => {
        expect(movie.toJSON()).toMatchSnapshot()
    })
})