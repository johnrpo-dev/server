
require('dotenv').config() //variables de entorno

const ServidorModelo = require('./models/ServidorModelo')

const servidorFPC = new ServidorModelo()

servidorFPC.encenderServidor()