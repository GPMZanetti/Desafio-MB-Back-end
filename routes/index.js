var rotas = require('express').Router();

var roteadorCadastrarConta = require('./cadastrarConta');
var roteadorIniciarSessão = require('./iniciarSessao');

rotas.get('/', (req, res) => {
  return res.json({version: 1.0})
});

rotas.use('/cadastrarConta', roteadorCadastrarConta);
rotas.use('/iniciarSessao', roteadorIniciarSessão);

module.exports = rotas;