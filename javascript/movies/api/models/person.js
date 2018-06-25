const { Schema, mongoose } = require('./db')

const PersonSchema = Schema({
    name: { first: String, last: String }
})

const Person = mongoose.model('Person', PersonSchema)

module.exports = Person