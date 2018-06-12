const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, resp) => {
  db.query('SELECT * FROM students', (err, result) => {
    console.log(result.constructor.name)
    if (err) return next(err)
    resp.json(result.rows)
  })
})

router.get('/:id', (req, resp) => {
  console.log(`id=${req.params.id}`)
  db.query('SELECT * FROM STUDENTS WHERE id = $1', [ req.params.id ], (err, result) => {
    if (err) { console.dir(err); return next() }
    console.dir(result)
    resp.json(result.rows[0])
  })
})

router.post('/', (req, resp) => {
  console.dir(req.body)
  let time_now = new Date()
  db.query('INSERT INTO STUDENTS ("student_number", "first_name", "last_name", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING *', [ req.body.student_number, req.body.first_name, req.body.last_name, time_now, time_now ], (err, result) => {
    resp.send(result.rows[0])
  })

})

module.exports = router
