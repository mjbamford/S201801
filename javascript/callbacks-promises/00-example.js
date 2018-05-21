function getUserName(cb, output) {
    const username = prompt('What is your name?')
    const message = cb(username)
    if (output !== undefined) {
        output(message)
    } else {
        return message
    }
}

function sayHello(name) {
    return 'Hello ' + name
}

let greeting = _ => "Greetings!"

// getUserName supports different greeting functions
console.log(getUserName(sayHello))
console.log(getUserName(greeting))

// getUsername supports various outputs
let out = alert //or out = console.log
getUserName(greeting, out)

// `out` isn't required
alert(getUserName(greeting))
