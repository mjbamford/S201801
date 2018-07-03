const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const authMiddleware = require('../middleware/auth')

router.get('/movies', authMiddleware.requireJWT, (req, resp) => {
    Movie.find({}).populate('director').then(movies => {
        resp.json(movies)
    })
})

router.get('/movies/:id', authMiddleware.requireJWT, (req, resp) => {
    const id = req.params.id
    Movie.findById(id).then(movie => {
        resp.json(movie)
    })
})

router.post('/movies', authMiddleware.requireJWT, (req, resp) => {
    const movie = req.body
    Movie.create(movie).then(movie => {
        resp.json(movie)
    })
})

module.exports = router