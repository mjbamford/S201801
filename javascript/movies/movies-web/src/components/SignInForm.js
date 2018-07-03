import React from 'react'
import * as authApi from '../api/auth'

const fields = {
    email: "user[email]",
    password: "user[password]"
}

const handleSubmit = (event, onLogIn) => {
    event.preventDefault()
    const form = event.target
    const email = form[fields.email].value
    const password = form[fields.password].value

    authApi.logIn({ email, password })
    .then(token => { console.dir(token); onLogIn(token) })
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