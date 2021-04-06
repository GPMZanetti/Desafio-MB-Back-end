var roteador = require('express').Router();
const models = require('../database/models');

roteador.post('/', async function (req, res, next) {
	let { nome, local, horário, preço, idUsuário } = req.body;
	console.log(idUsuário);

	try {
		models['Evento'].create(
			{
				nome,
				local,
				horario: horário,
				preco: preço,
				idUsuario: parseInt(idUsuário),
			},
			{
				include: [{
					association: 'usuario'
				}],
			}
		).then((evento) => {
			return res.json({ situação: "Sucesso" });
		}).catch((erro) => {
			console.log(erro);
			return res.json({ situação: "Erro", dados: "Erro ao cadastrar evento" });
		});
	}
	catch (erro) {
		console.log(erro);
		return res.json({ situação: "Erro", dados: "Erro ao cadastrar evento" });
	}
});

module.exports = roteador;