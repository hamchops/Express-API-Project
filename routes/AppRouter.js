const Router = require('express').Router()
const ClientRouter = require ('./ClientRouter')


Router.use('/clients', ClientRouter)
module.exports = Router