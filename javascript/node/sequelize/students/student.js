const sequelize = require('../db')
const Sequelize = require('sequelize')

const Student = sequelize.define('student', {
    student_number: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  },
  {
    underscored: true
  })

module.exports = Student
