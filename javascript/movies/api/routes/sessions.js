const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/session/new', (req, resp) => {
    resp.render('sessions/new', { message: 'Welcome!' })
})

router.get('/session', (req, resp) => {
    console.log(req.user)
    resp.send('Logged In!')
})

router.post('/session',
    (req, resp, next) => {
        console.log(req.body)
        next()
    },
    passport.authenticate('local', { failureRedirect: '/session/new' }),
    (req, resp) => {
        resp.redirect('/session')
    }
)

module.exports = router