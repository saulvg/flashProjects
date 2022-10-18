//Proporciona mecanismos para escritura manejadora de peticiones con diferentes verbos HTTP en diferentes rutas URL
const express = require('express');
//Para midelware para capturar la solicitud HTTP para su posterior uso ('get', 'post', etc...), tiene acceso a los metodos ('req', 'res', 'next', ...)
const morgan = require('morgan');
//Mecanismo o politica de privacidad que permite controlar peticiones HTTP asincronas de se pueden realizar del navegador a un servidor o dominio diferente al de la pagina de origen
const cors = require('cors');
//Biblioteca que ayuda a a trabajar con matrices, colecciones, string, objetos, numeros, etc...
const sortBy = require('lodash.sortby');

const app = express();
const verbs = require('./verbs.json');

//Midelware que solo contempla las peticiones tipo 'json'
app.use(express.json());
//Midelwares para control de la app
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
  return res.send({
    status: 'ok',
    data: sortBy(verbs, 'infinitive'),
  });
});
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

// Lanzamos el servidor
app.listen(4000, () => {
  console.log('Servidor funcionando! 👻');
});
