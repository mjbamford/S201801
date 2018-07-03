const express = require('express')
const passport = require('passport')
const router = express.Router()

const sneakyPeek = (req, resp, next) => {
    console.log("SneakyPeek", req.body)
    next()
}

router.get('/session/new', sneakyPeek, (req, resp) => {
    resp.render('sessions/new', { message: 'Welcome!' })
})

router.get('/session', sneakyPeek, (req, resp) => {
    resp.send('Logged In!')
})

router.post('/session',
    sneakyPeek, 
    passport.authenticate('local', { failureRedirect: '/session/new' }),
    (req, resp) => {
        resp.redirect('/session')
    }
)

module.exports = router