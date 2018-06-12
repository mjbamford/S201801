const express = require('express')
const Student = require('./student')
const router = express.Router()

router.get('/', (req, resp) => {
  Student.findAll().then(results => {
    console.dir(results)
    resp.send(results)
  })
})

router.get('/:id', (req, resp) => {
  const id = req.params.id
  Student.findById(id).then(results => {
    console.dir(results)
    resp.send(results)
  })
})

router.post('/', (req, resp) => {
  console.dir(req.body)
})

module.exports = router
