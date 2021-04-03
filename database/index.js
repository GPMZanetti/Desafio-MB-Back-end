const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://fgnjksoe:J_hvTjodR6nd7dJORmu3PG3zjobjhEZj@tuffi.db.elephantsql.com:5432/fgnjksoe');

try {
    sequelize.authenticate().then(() => {
        console.log('A conexão com o banco de dados foi estabelecida.');
        require('./models');
    }).catch((erro) => {
        console.error('Não foi possível conectar com o banco de dados: ', erro);
    });
}
catch (erro) {
    console.error('Não foi possível conectar com o banco de dados: ', erro);
}

module.exports = sequelize;