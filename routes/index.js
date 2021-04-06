var rotas = require('express').Router();

var roteadorCadastrarConta = require('./cadastrarConta');
var roteadorIniciarSessão = require('./iniciarSessao');
var roteadorCadastrarEvento = require('./cadastrarEvento');

rotas.get('/', (req, res) => {
  return res.json({version: 1.0})
});

rotas.use('/cadastrarConta', roteadorCadastrarConta);
rotas.use('/iniciarSessao', roteadorIniciarSessão);
rotas.use('/cadastrarEvento', roteadorCadastrarEvento);

module.exports = rotas;