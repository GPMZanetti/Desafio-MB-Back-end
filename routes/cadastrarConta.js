var roteador = require('express').Router();
const bcrypt = require('bcrypt');
const models = require('../database/models');

process.env.SECRET_KEY = 's5i9NlQC9G';

roteador.post('/', async function (req, res, next) {
	let { nome, dataDeNascimento, email, senha } = req.body;

	try {
		await bcrypt.hash(senha, 10, (erro, hash) => {
			senha = hash;

			models['Usuario'].findOrCreate({
				where: {
					email,
				},
				defaults: {
					nome,
					dataDeNascimento,
					email,
					senha,
				},
			}).then(([usuário, usuárioCriado]) => {
				if (!usuárioCriado)
					return res.json({ situação: "Erro", dados: "Usuário já cadastrado" });

				return res.json({ situação: "Sucesso" });
			}).catch((erro) => {
				console.log(erro);
				return res.json({ situação: "Erro", dados: "Erro ao cadastrar usuário" });
			});
		});
	}
	catch (erro) {
		console.log(erro);
		return res.json({ situação: "Erro", dados: "Erro ao cadastrar usuário" });
	}
});

module.exports = roteador;