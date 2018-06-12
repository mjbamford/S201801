// Example of importing an npm modules.
const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser');

// Example of importing out own module.
const studentsRouter = require('./app/students')

const app = express()
const port = 4000

app.use(bodyParser.json());

// Middleware to log the request headers.
app.use((req, resp, next) => {
  console.log(req.headers)
  next()
})

// Mount students router upon '/students' route.
app.use('/students', studentsRouter);

// Start the server
app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log('Server started on port ' + port)
})
