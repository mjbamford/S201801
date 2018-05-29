// Vanilla Node http server; provided here for reference only.

const http = require('http')
const port = 4000

const server = http.createServer(function(req, resp) {
  console.log(req.constructor.name)
  console.log(resp.constructor.name)
  console.log(req.url)
  resp.end('Hello, world!')
})

server.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
})
