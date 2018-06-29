import React from 'react'

const handleSubmit = (event, onLogIn) => {
    event.preventDefault()
    const form = event.target
    const email = form["user[email]"].value
    const password = form["user[password]"].value
    console.dir({ email, password })
    // Go out to /auth/signin
    onLogin("666")
}

function SignInForm ({ onLogIn }) {
    return (
        <form onSubmit={(event) => { handleSubmit(event, onLogIn) }} >
            <label>
                <span>Email</span>
                <input name="user[email]" />
            </label>
            <br/>
            <label>
                <span>Password</span>
                <input type="password" name="user[password]" />
            </label>
            <button type="submit">Log In!</button>
        </form>
    )
}

export default SignInForm