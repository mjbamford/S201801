import React from 'react'

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

export default MovieForm