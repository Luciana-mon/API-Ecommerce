const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtdEstoque: {
        type: Sequelize.STRING,
        allowNull: false
    },
    disponivel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emDestaque: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    departamento: {
        type: Sequelize.ENUM('Acessórios para computadores', 'Lápis de escrever', 'Artesanato', 'Agenda'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)



