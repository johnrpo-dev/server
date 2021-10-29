
const JugadorModelo = require('../models/JugadorModelo');

// es el encargado de realizar las operaciones en la base de datos

const insertarJugador = async (datos) => {
    let jugadorNuevo = new JugadorModelo(datos);
    return await jugadorNuevo.save();
}

const leerJugador = async (id) => {
    let jugadorBuscado = await JugadorModelo.findById(id);
    return jugadorBuscado;
}

const leerJugadores = async () => {
    let jugadoresBuscados = await JugadorModelo.find();
    return jugadoresBuscados;
}

const borrarJugador = async (id) => {
    return await JugadorModelo.findByIdAndDelete(id);
}

const modificarJugador = async (id, datos) => {
    return await JugadorModelo.findByIdAndUpdate(id, datos);
}

module.exports = {
    insertarJugador,
    leerJugador,
    leerJugadores,
    borrarJugador,
    modificarJugador
}