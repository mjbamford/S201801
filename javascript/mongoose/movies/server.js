const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

const Movie = require('./models/Movie')
const Person = require('./models/Person')
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

server.get('/session/new', (req, resp) => {
    resp.render('sessions/new', { message: 'Welcome!' })
})

server.get('/session', (req, resp) => {
    console.log(req.user)
    resp.send('Logged In!')
})

server.post('/session',
    (req, resp, next) => {
        console.log(req.body)
        next()
    },
    passport.authenticate('local', { failureRedirect: '/session/new' }),
    (req, resp) => {
        resp.redirect('/session')
    }
)

server.get('/movies', (req, resp) => {
    // Get all movies out of the database
    let count = req.session.count || 1
    console.log(`count=${count}`)
    req.session.count = (count + 1)
    Movie.find({}).populate('director').then(movies => {
        resp.json(movies)
    })
})

server.get('/movies/:id', (req, resp) => {
    const id = req.params.id
    Movie.findById(id).then(movie => {
        resp.json(movie)
    })
})

server.post('/movies', (req, resp) => {
    const movie = req.body
    Movie.create(movie).then(movie => {
        resp.json(movie)
    })
})

server.get('/test', (req, resp) => {
    resp.send('OK!')
})

server.listen(3000)