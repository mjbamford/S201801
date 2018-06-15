function countWords (text) {
    let wordCount = 0
    let result = text.match(/\w+/g)
    if (result) { wordCount = result.length }
    return wordCount
}

function Editor ({ onTextChange }) {
    function handleChange (event) {
        onTextChange(event.target.value)
    }

    return (
        <div>
            <label>Enter your text:</label>
            <textarea onChange={handleChange}></textarea>
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
                <Editor onTextChange={this.handleTextChange} />
                <Counter count={wordCount} />
                <CharacterCounter text={text} />
                <ProgressBar completion={progress} />
            </form>
        )
    }
}

ReactDOM.render(
    <WordCounter text="The rain in spain the plain" targetWordCount={12} />,
    document.getElementById('app')
)