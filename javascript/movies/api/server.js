const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const User = require('./models/user');

const server = express()

server.set('views', './views')
server.set('view engine', 'pug')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }})
)
server.use(passport.initialize());
server.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

server.use([
    require('./routes/sessions'),
    require('./routes/movies')
])

server.get('/ping', (req, resp) => {
    resp.send('OK!')
})

server.listen(7000)
