const repl = require('repl')
const User = require('./models/user')
const Movie = require('./models/movie')
const console = repl.start({ prompt: 'movies > ' })

console.context.User = User
console.context.Movie = Movie