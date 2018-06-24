const { Schema, mongoose } = require('./db')
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose, {
    usernameField: 'email'
})

module.exports = mongoose.model('User', User);