const Sequelize = require('sequelize')

const sequelize = new Sequelize("postgres://postgres:One2three@localhost:5432/eleven-journal")

module.exports = sequelize