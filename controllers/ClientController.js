const { Client, Patient } = require('../models')

const GetFiles = async (req, res) => {
    try {
        const clients = await Client.findAll()
        res.send(clients)
    } catch (error) {
        throw error
    }
}

const GetClientProfile = async (req, res) => {
    try {
        const clientAndPatient = await Client.findByPk(req.params.client_id, {
            include: [{model: Patient, as: 'patient'}]
        })
        res.send(clientAndPatient)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetFiles,
    GetClientProfile
}