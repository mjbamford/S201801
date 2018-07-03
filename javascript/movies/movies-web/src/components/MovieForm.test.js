import React from 'react'
import { MemoryRouter, Link } from 'react-router'
import { mount } from 'enzyme'
import MovieForm from './MovieForm'

describe('MovieForm', () => {
    it('renders', () => {
        const onCreate = jest.fn()
        const wrapper = mount(<MovieForm onCreate={onCreate} />)
        const expected = { title: "TITLE", yearReleased: '1990' }
        const event = { target: {
            'movie[title]': { value: expected.title },
            'movie[yearReleased]': { value: expected.yearReleased }
        }}

        wrapper.find('form').simulate('submit', event)
        expect(onCreate.mock.calls.length).toBe(1)
        expect(onCreate.mock.calls[0][0]).toEqual(expected)
    })
})