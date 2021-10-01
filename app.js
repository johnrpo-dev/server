const express = require('express')
const app = express()
 
app.get('/avanzada/v1/jugadores',  (req, res) => {
  res.send('Hello World, Desde express... procesando datos')
})
app.post('/avanzada/v1/jugadores', function (req, res) {
  res.send('Hello World, Desde express... insetando datos')
})
app.put('/avanzada/v1/jugadores', function (req, res) {
  res.send('Hello World, Desde express... actualizando datos')
})
app.delete('/avanzada/v1/jugadores', function (req, res) {
  res.send('Hello World, Desde express... eliminando datos')
})
 
app.listen(3000, () => {
  console.log('Servidor encendido');
})