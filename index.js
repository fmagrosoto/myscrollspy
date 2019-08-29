const express = require('express');
const app = express();

// Esto es un direccionamiento
app.get('/', function (req, res) {
  // res.send('Probando Express');
  res.sendFile('public_html/index.html', { root: __dirname });
});

// Uso general en cualquier árbol de directorios
// ¡Esta es la ley!
app.use(express.static('public_html/'));

app.listen(3505, function () {
  console.log('!Corriendo MyScrollSpy en el puerto 3505!');
});
