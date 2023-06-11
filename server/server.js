require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.get('/api/usuarios',async (req, res) => {

  res.json('Get Usuarios');
  
});

app.put('/api/usuarios/:id',async (req, res) => {

  let id = req.params.id;

  res.json({
    id: id
  });
  
});

app.post('/api/usuarios', async(req, res) => {

  let body = req.body;

  res.json({
    body: body
  });

})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
