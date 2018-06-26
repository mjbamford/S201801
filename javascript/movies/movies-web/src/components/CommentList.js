import React from 'react'

function Comment ({ body }) {
    return (<span>{body}</span>)
}

export default function CommentList ({ items }) {
    return (
        <ul>
        {
            !!items &&
                items.map(item => (
                    <li key={item._id}>
                        <Comment {...item}/>
                    </li>
                ))
        }
        </ul>
    )
}
