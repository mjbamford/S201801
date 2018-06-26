import React from 'react'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'

const Rating = ({ code, description }) => {
    return (<span>{code} {description}</span>)
}

const Movie = ({
    _id,
    title,
    yearReleased,
    rating,
    comments
}) => {
    return (<div>
        <Link to={`/movies/${_id}`}>{title}</Link>
        <span>{yearReleased}</span>
        <Rating {...rating} />
        <CommentList items={comments} />
    </div>)
}

export default Movie