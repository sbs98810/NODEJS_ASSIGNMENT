const express = require('express')
const Router = express.Router()
const data = require('./users.json')

Router.get('/studentsList', (req, res) => {
  res.send(JSON.stringify(data))
})

module.exports = Router