import React from 'react'
import Editor from './Editor'
import StudentsList from './StudentsList'
import { SUCCESS, FAILURE, WAITING, IDLE } from './Config'

function countWords (text) {
    let wordCount = 0
    let result = text.match(/\w+/g)
    if (result) { wordCount = result.length }
    return wordCount
}

function SaveButton ({ onClick }) {
    let makeFunc = function() {
        let count = 0
        let handler = function (event) {
            event.preventDefault()
            count++
            console.dir(`Click count is: ${count}`)
        }
        return handler
    }
    return (
        <button className="pv2 ph3" onClick={onClick}>Save</button>
    )
}

function AlertBox ({ status }) {
    if (status === FAILURE ) {
        return <div className="mv2">Failure</div>
    } else if (status === SUCCESS) {
        return <div className="mv2">Success</div>
    } else if (status === WAITING) {
        return <div className="mv2">Saving...</div>
    } else {
        return null
    }
}

class SaveManager extends React.Component {
    constructor (props) {
        super(props)
        this.state = { saveStatus: IDLE }
        this.handleSave = this.handleSave.bind(this)
    }

    save = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve()
                } else {
                    reject()
                }
            }, 1000)
        })
    }

    // handleSave = (event) => {
    // Either use pointer function syntax, or a function statement that is
    // bound to this instance in the constructor (with `bind`).
    handleSave (event) {
        event.preventDefault()
        this.setState(() => ({ saveStatus: WAITING }))
        this.save().then(
            success => (this.setState({ saveStatus: SUCCESS })),
            failure => (this.setState({ saveStatus: FAILURE }))
        )
    }

    render () {
        return (
            <div>
                <SaveButton onClick={this.handleSave} />
                <AlertBox status={this.state.saveStatus} />
            </div>
        )
    }
}

function Counter ({ count }) {
    return (
        <p>
            Word Count: {count}
        </p>
    )
}

function CharacterCounter({ text }) {
    return (
        <p>Character Count: {text.length}</p>
    )
}

function ProgressBar ({ completion }) {
    return (
        <div className="mv2 flex flex-column">
            <label className="mv2">Progress</label>
            <progress value={completion} />
        </div>
    )
}

/*
function WordCounter ({ text, targetWordCount }) {
    const wordCount = countWords(text)
    const progress = wordCount / targetWordCount

    function handleTextChange (currentText) {
        console.log(currentText)
    }

    return (
        <form className="measure pa4 sans-serif">
            <Editor onTextChange={handleTextChange} />
            <Counter count={wordCount} />
            <ProgressBar completion={progress} />
        </form>
    )
}
*/

class WordCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '', students: [] }
    }

    handleTextChange = (currentText) => {
        this.setState(() => ({ text: currentText }))
    }

    componentDidMount () {
        fetch('http://localhost:3000/students.json')
            .then(resp => resp.json())
            .then(json => this.setState({ students: json }))
    }

    componentWillUnMount () {
        console.log('Component Will Unmount')
    }

    render () {
        const { text } = this.state
        const { targetWordCount } = this.props
        const wordCount = countWords(text)
        const progress = wordCount / targetWordCount

        return (
            <form className="measure pa4 sans-serif">
                <h1>Hello World</h1>
                <Editor text={this.state.text} onTextChange={this.handleTextChange} />
                <Counter count={wordCount} />
                <CharacterCounter text={text} />
                <ProgressBar completion={progress} />
                <SaveManager data={this.state} />
                <StudentsList students={this.state.students} />
            </form>
        )
    }
}

export default WordCounter