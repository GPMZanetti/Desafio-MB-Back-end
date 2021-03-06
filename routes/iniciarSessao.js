var roteador = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../database/models');

process.env.SECRET_KEY = 's5i9NlQC9G';

roteador.post('/', async function(req, res, next) {
  let { email, senha } = req.body;

  try {
    models['Usuario'].findOne({
        where: {
            email,
        },
    }).then((usuário) => {
        if (!usuário)
            return res.json({situação: "Erro", dados: "Usuário não encontrado"});

        if (bcrypt.compareSync(senha, usuário.senha)) {
            const dados = {
                _id: usuário.ID,
                email: usuário.email,
            };

            let token = jwt.sign(dados, process.env.SECRET_KEY, {
                expiresIn: 14400
            });

            return res.json({"situação": "Sucesso", "dados": token});
        }
        else
            res.json({"situação": "Erro", "dados": "Endereço de e-mail ou senha inválidos"});
    }).catch((erro) => {
        console.log(erro);
        return res.json({situação: "Erro", dados: "Erro ao iniciar sessão"});
    });
  }
  catch (erro) {
      console.log(erro);
      return res.json({situação: "Erro", dados: "Erro ao iniciar sessão"});
  }
});

module.exports = roteador;