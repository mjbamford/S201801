const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/movies')

const MovieSchema = Schema({
    title: String,
    yearReleased: Number
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie