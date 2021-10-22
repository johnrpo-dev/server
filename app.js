
require('dotenv').config() //variables de entorno

const ServidorModelo = require('./models/ServidorModelo.js')

const servidorFPC = new ServidorModelo()

servidorFPC.encenderServidor()