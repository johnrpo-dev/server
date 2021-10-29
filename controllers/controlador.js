
const { request, response } = require ('express')

const { insertarJugador,
        leerJugador,
        leerJugadores,
        borrarJugador,
        modificarJugador } = require ('../service/servicioJugadores')


const registrarJugador = async ( peticion = request, respuesta = response ) => {

    let datosPeticion = peticion.body
        try {
            await insertarJugador( datosPeticion )
            respuesta.status(200).json({
                msg: 'Jugador registrado',
                estado: true
            })
        } catch (error) {
            respuesta.status(400).json({
                msg: 'Error al registrar el jugador' + error,
                estado: false
            })
        }
}
const buscarJugador = async ( peticion = request, respuesta = response ) => {

    //recibir el id a buscar
    try {
        let id = peticion.params.id
        let jugador = await leerJugador( id )
        respuesta.status(200).json({
            msg: jugador,
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al registrar el jugador' + error,
            estado: false
        })
    }
}
const buscarJugadores = async ( peticion = request, respuesta = response ) => {
    
    try {
        let jugadores = await leerJugadores()
        respuesta.status(200).json({
            msg: jugadores,
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al buscar los jugadores' + error,
            estado: false
        })
    }
}
const editarJugador = async ( peticion = request, respuesta = response ) => {
    
    try {
        let id = peticion.params.id
        let datosPeticion = peticion.body

        await modificarJugador( id, datosPeticion )

        respuesta.status(200).json({
            msg: 'Jugador modificado',
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al modificar el jugador' + error,
            estado: false
        })
    }

}
const eliminarJugador = async ( peticion = request, respuesta = response ) => {
    // id para eliminar

    let id = peticion.params.id
    try {
        await borrarJugador( id )
        respuesta.status(200).json({
            msg: 'Jugador eliminado',
            estado: true
        })
    } catch (error) {
        respuesta.status(400).json({
            msg: 'Error al eliminar el jugador' + error,
            estado: false
        })
    }
}

module.exports = {
    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador
}