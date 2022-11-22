const { Client, Patient } = require('../models')

const GetFiles = async (req, res) => {
    try {
        const clients = await Client.findAll()
        res.send(clients)
    } catch (error) {
        throw error
    }
}

const GetClientPets = async (req, res) => {
    try {
        const clientAndPatient = await Client.findByPk(req.params.user_id, {
            include: [{model: patient, as: 'patients'}]
        })
        res.send(clientAndPatient)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetFiles,
    GetClientPets
}