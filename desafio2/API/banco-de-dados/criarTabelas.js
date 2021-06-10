const ModeloTabela = require('../rotas/produtos/ModeloTabelaProduto')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)