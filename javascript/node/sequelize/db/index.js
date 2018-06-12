const Sequelize = require('sequelize')
const sequelize = new Sequelize('students_api_development', null, null, {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize
