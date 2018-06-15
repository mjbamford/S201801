const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const WAITING = 'WAITING'
const IDLE = 'IDLE'

function countWords (text) {
    let wordCount = 0
    let result = text.match(/\w+/g)
    if (result) { wordCount = result.length }
    return wordCount
}

function SaveButton ({ onClick }) {
    return (
        <button onClick={onClick}>Save</button>
    )
}

function AlertBox ({ status }) {
    if (status === FAILURE ) {
        return <div>Failure</div>
    } else if (status === SUCCESS) {
        return <div>Success</div>
    } else if (status === WAITING) {
        return <div>Saving...</div>
    } else {
        return null
    }
}

class SaveManager extends React.Component {
    constructor (props) {
        super(props)
        this.state = { saveStatus: IDLE }
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

    handleSave = (event) => {
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

function Editor ({ text, onTextChange }) {
    function handleChange (event) {
        onTextChange(event.target.value)
    }

    return (
        <div>
            <label>Enter your text:</label>
            <textarea value={text} onChange={handleChange}></textarea>
        </div>
    )
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
        <div>
            <label>Progress</label>
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
        this.state = { text: '' }
    }

    handleTextChange = (currentText) => {
        this.setState(() => ({ text: currentText }))
    }

    render () {
        const { text } = this.state
        const { targetWordCount } = this.props
        const wordCount = countWords(text)
        const progress = wordCount / targetWordCount

        return (
            <form className="measure pa4 sans-serif">
                <Editor text={this.state.text} onTextChange={this.handleTextChange} />
                <Counter count={wordCount} />
                <CharacterCounter text={text} />
                <ProgressBar completion={progress} />
                <SaveManager data={this.state} />
            </form>
        )
    }
}

ReactDOM.render(
    <WordCounter text="The rain in spain the plain" targetWordCount={12} />,
    document.getElementById('app')
)