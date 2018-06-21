const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const Movie = require('./models/Movie')
const Person = require('./models/Person')
const server = express()

server.use(bodyParser.json())

server.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }})
)

server.get('/movies', (req, resp) => {
    // What is the req object
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

server.put('/movies/:id', (req, resp) => {
    const id = req.params.id
    const movie = req.body
    Movie.findByIdAndUpdate(id, movie, {new: true}, (movie) => {
        return resp.send(movie)
    })
})

server.listen(3000)