const {Router} = require('express')
const veiculoController = require('../controller/veiculoController')

const routes = Router()

// Veículos
routes.get('/veiculos/:id', veiculoController.find)
routes.get('/veiculos', veiculoController.findAll)
routes.post('/veiculos', veiculoController.create)
routes.put('/veiculos/:id', veiculoController.update)
routes.delete('/veiculos/:id', veiculoController.remove)

module.exports = routes 