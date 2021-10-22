
const { request, response } = require ('express')

const registrarJugador = ( peticion = request, respuesta = response ) => {

    let datosPeticion = peticion.body
    respuesta.json({
        msg: 'Estoy registrando un jugador', 
        datos:datosPeticion
    })
}
const buscarJugador = ( peticion = request, respuesta = response ) => {

    //recibir el id a buscar
    let id = peticion.params.id

    respuesta.json({
        msg: 'Estoy buscando un jugador' + id 
    })
}
const buscarJugadores = ( peticion = request, respuesta = response ) => {
    respuesta.json({
        msg: 'Estoy buscando los jugadores'
    })
}
const editarJugador = ( peticion = request, respuesta = response ) => {
    //id para editar
    let id = peticion.params.id

    respuesta.json({
        msg: 'Estoy editando un jugador'
    })
}
const eliminarJugador = ( peticion = request, respuesta = response ) => {
    // id para eliminar
    let id = peticion.params.id

    respuesta.json({
        msg: 'Estoy eliminando un jugador'
    })
}

module.exports = {
    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador
}