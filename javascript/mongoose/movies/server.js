const express = require('express')
const Movie = require('./models/Movie')

const server = express()

server.get('/movies', (req, resp) => {
    // Get all movies out of the database
    Movie.find({}).then(movies => {
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
    console.dir(req)
    resp.send('ok!')
})

server.get('/test', (req, resp) => {
    resp.send('OK!')
})

server.listen(3000)