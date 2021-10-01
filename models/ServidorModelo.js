
const express = require('express')


class ServidorModelo{
    
    constructor () {

        this.app = express()
        this.enrutarPeticiones()
    }
    encenderServidor(){

        this.app.listen(process.env.PUERTO, () => {
            // console.log('Servidor encendido' + process.env.PUERTO);
            console.log(`Servidor encendido ${process.env.PUERTO}`);
          })
    }
    enrutarPeticiones() {
 
        this.app.get('/avanzada/v1/jugadores',  (req, res) => {
            res.send('Hello World, Desde express... procesando datos')
        })
        this.app.post('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World, Desde express... insetando datos')
        })
        this.app.put('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World, Desde express... actualizando datos')
        })
        this.app.delete('/avanzada/v1/jugadores', function (req, res) {
            res.send('Hello World, Desde express... eliminando datos')
        })
   
  
    }
    conectarBD() {

        
    }
}
module.exports = ServidorModelo