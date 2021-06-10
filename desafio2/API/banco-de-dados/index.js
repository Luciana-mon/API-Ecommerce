// vamos exportar uma conexao com o banco de dados
// vamos utilizar o Sequelize

const Sequelize = require('sequelize')
const config = require('config')


const instancia = new Sequelize(
    'desafiogrup',
    'root',
   'admin',
    // objeto passado ip da maquina que está rodando o arquivo
   // dialeto para explicar qual é o banco de dados que vamos trabalhar
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = instancia


//Vamos utilizar a biblioteca config agora pois os dados acima são informações confidenciais
// e não podemos deixar exposto, certo?

// então vamos criar a pasta config/default.json
//e inserir as informações de como senha, nome de usurio e porta de acesso nele


//para consumir os dados chama a biblioteca os dados utiliza const config = require('config') 
//para pegar as informações vamos utilziar o config.get (pegar) ('mysql(lembra do que colocamos no arquivo default? vamos chamar aqui).banco-de-dados')
//e fazer isso com os demais elementos