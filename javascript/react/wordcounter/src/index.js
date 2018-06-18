import React from 'react'
import ReactDOM from 'react-dom'
import WordCounter from './WordCounter'

ReactDOM.render(
    <WordCounter text="The rain in spain the plain" targetWordCount={12} />,
    document.getElementById('app')
)