import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

function MovieList ({ items }) {
    return (
        <ul>
            {
                !!items ?
                    items.map(item => (
                        <li key={item._id}>
                            <Movie {...item}/>
                            <small>
                                <Link to={`/movies/${item._id}/edit`}>Edit</Link>
                            </small>
                        </li>
                    ))
                :
                    <p>Loading...</p>
            }
        </ul>
    )
}

export default MovieList