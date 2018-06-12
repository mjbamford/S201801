const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'students_api_development',
  port: 5432
})

module.exports = {
  query: (sql, params, callback) => {
    return pool.query(sql, params, callback)
  }
}
