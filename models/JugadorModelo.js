
const { model, Schema } = require('mongoose')

const JugadorModelo = Schema({
    nombre:{
        type: String,
        require: true
    },
    edad:{
        type: Number,
        require: true
    },
    equipo:{
        type: String,
        require: true
    },
    posicion: {
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    }
})

module.exports = model('Jugadores',JugadorModelo)