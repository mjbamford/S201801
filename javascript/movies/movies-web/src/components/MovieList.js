import React from 'react'
import Movie from './Movie'

function MovieList ({ items }) {
    return (
        <ul>
            {
                !!items ?
                    items.map(item => (
                        <li key={item._id}>
                            <Movie {...item}/>
                        </li>
                    ))
                :
                    <p>Loading...</p>
            }
        </ul>
    )
}

export default MovieList