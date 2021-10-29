
const express = require('express')
const { conectarBD } = require('../db/conexion.js')
const rutas = require('../routes/rutas')
const cors = require('cors')


class ServidorModelo{
    
    constructor () {

        this.app = express()
        this.despertarBD()
        this.llamarAuxliares()
        this.enrutarPeticiones()
    }
    encenderServidor(){

        this.app.listen(process.env.PORT, () => {
            // console.log('Servidor encendido' + process.env.PUERTO);
            console.log(`Servidor encendido ${process.env.PUERTO }`);
        })
    }

    
    enrutarPeticiones = () => this.app.use('/', rutas)
    
    despertarBD = () => conectarBD()

    llamarAuxliares () {
        this.app.use(express.json())
        this.app.use(cors())
    }
    
}
module.exports = ServidorModelo