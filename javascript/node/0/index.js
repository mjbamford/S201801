// Example of importing an npm module
const _ = require('lodash')

// Example of importing our own module contained in a file
const { students, teachers } = require('./app')

// Express

const express = require('express')
const app = express()
const port = 4000

// Middleware to log the request headers.
app.use((req, resp, next) => {
  console.log(req.headers)
  next()
})

// GET '/'; send (and complete) the response with a tet message
app.get('/', (req, resp) => {
  resp.send('Hello from Express')
})

// Start the server
app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log('Server started on port ' + port)
})
