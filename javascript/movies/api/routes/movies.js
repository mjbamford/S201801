const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/movies', (req, resp) => {
    // Get all movies out of the database
    let count = req.session.count || 1
    console.log(`count=${count}`)
    req.session.count = (count + 1)
    Movie.find({}).populate('director').then(movies => {
        resp.json(movies)
    })
})

router.get('/movies/:id', (req, resp) => {
    const id = req.params.id
    Movie.findById(id).then(movie => {
        resp.json(movie)
    })
})

router.post('/movies', (req, resp) => {
    const movie = req.body
    Movie.create(movie).then(movie => {
        resp.json(movie)
    })
})

module.exports = router