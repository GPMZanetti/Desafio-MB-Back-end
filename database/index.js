const { sequelize } = require('./models');

try {
    sequelize.authenticate().then(() => {
        console.log('A conexão com o banco de dados foi estabelecida.');
    }).catch((erro) => {
        console.error('Não foi possível conectar com o banco de dados: ', erro);
    });
}
catch (erro) {
    console.error('Não foi possível conectar com o banco de dados: ', erro);
}

module.exports = sequelize;