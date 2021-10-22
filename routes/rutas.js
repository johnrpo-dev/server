
const { Router } = require('express')

const rutas = Router()

const { registrarJugador,
        buscarJugador,
        buscarJugadores,
        editarJugador,
        eliminarJugador } = require('../controllers/controlador')


rutas.get('/avanzada/v1/jugadores', buscarJugadores)
rutas.get('/avanzada/v1/jugadores/:id', buscarJugador)
rutas.post('/avanzada/v1/jugadores', registrarJugador)
rutas.put('/avanzada/v1/jugadores/:id', editarJugador)
rutas.delete('/avanzada/v1/jugadores/:id', eliminarJugador)

module.exports = rutas