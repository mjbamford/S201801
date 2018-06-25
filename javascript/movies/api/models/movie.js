const { Schema, mongoose } = require('./db')
const Person = require('../models/person')

const CommentSchema = Schema({
    body: String
})

const MovieSchema = Schema({
    title: String,
    rating: {
        code: String,
        description: String
    },
    yearReleased: { type: Number },
    comments: [ CommentSchema ],
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie