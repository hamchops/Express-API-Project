const Router = require('express').Router()
const ClientRouter = require ('./ClientRouter')
// const PatientRouter = require ('./PatientRouter')
// const VaccineHistory = require ('./VaccineRouter')


Router.use('/clients', ClientRouter)
module.exports = Router