
const express = require('express')
const { conectarBD } = require('../db/conexion.js')
const rutas = require('../routes/rutas')


class ServidorModelo{
    
    constructor () {

        this.app = express()
        // this.despertarBD()
        this.llamarAuxliares()
        this.enrutarPeticiones()
    }
    encenderServidor(){

        this.app.listen(process.env.PUERTO, () => {
            // console.log('Servidor encendido' + process.env.PUERTO);
            console.log(`Servidor encendido ${process.env.PUERTO }`);
        })
    }

    
    enrutarPeticiones = () => this.app.use('/', rutas)
    
    despertarBD = () => conectarBD()

    llamarAuxliares () {
        this.app.use(express.json())

    }
    
}
module.exports = ServidorModelo