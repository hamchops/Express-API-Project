const Router = require('express').Router()
const controller = require('../controllers/ClientController')

Router.get('/', controller.GetFiles)
Router.get('/:user_id', controller.GetClientProfile)

module.exports = Router