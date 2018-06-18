import React from 'react'

function Editor ({ text, onTextChange }) {
    function handleChange (event) {
        onTextChange(event.target.value)
    }

    return (
        <div className="flex flex-column mv2">
            <label className="mv2">Enter your text:</label>
            <textarea value={text} onChange={handleChange}></textarea>
        </div>
    )
}

export default Editor