const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const authMiddleware = require('../middleware/auth')

router.get('/movies',
    // authMiddleware.requireJWT,
    (req, resp) => {
        // Get all movies out of the database
        Movie.find({}).populate('director').then(movies => {
            resp.json(movies)
        })
    }
)

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