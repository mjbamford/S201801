import React from 'react'

const Rating = ({ code, description }) => {
    return (<span>{code} {description}</span>)
}

const Movie = ({ _id, title, yearReleased, rating, comments }) => {
    return (<p>{_id} {title} {yearReleased} <Rating {...rating} /></p>)
}

function MovieList ({ items }) {
    return (
        <ul>
            {
                items.map(item => (
                    <li key={item._id}>
                        <Movie {...item}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default MovieList