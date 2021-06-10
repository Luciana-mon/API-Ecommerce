const TabelaProduto = require('./TabelaProduto')


class Produto{
    constructor({id, descricao, preco, qtdEstoque, disponivel, emDestaque, departamento, dataCriacao, dataAtualizacao, versao }){
        this.id = id
        this.descricao = descricao
        this.preco = preco
        this.qtdEstoque = qtdEstoque
        this.disponivel = disponivel
        this.emDestaque = emDestaque
        this.departamento = departamento
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao

    }

     async criar (){
        this.validar()
        const resultado = await TabelaProduto.inserir({
            descricao: this.descricao,
            preco: this.preco,
            departamento: this.departamento,
            qtdEstoque: this.qtdEstoque,
            disponivel: this.disponivel,
            emDestaque: this.emDestaque,
            departamento: this.departamento
        })
        this.id =resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao

    }

    async carregar (){
        const produtoEncontrado = await TabelaProduto.pegarPorId(this.id)
        this.descricao = produtoEncontrado.descricao
        this.preco = produtoEncontrado.preco
        this.qtdEstoque = produtoEncontrado.qtdEstoque
        this.dataCriacao = produtoEncontrado.dataCriacao
        this.dataAtualizacao = produtoEncontrado.dataAtualizacao
        this.versao = produtoEncontrado.versao
    }

    async atualizar(){
        await TabelaProduto.pegarPorId(this.id)
        const campos = ['descricao','preco','qtdEstoque','disponivel','emDestaque','departamento']
        const dadosParaAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo]

            if(typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor
            }
        })
        //retorna uma lista com os objetos da chave
        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Não foram fornecidos dados para atualizar')
        }

        await TabelaProduto.atualizar(this.id, dadosParaAtualizar)
    }
    remover(){
       return TabelaProduto.remover(this.id)
    }

    validar(){
        const campos = ['descricao','preco','qtdEstoque','disponivel', 'emDestaque','departamento']

        campos.forEach(campo=>{
            const valor = this[campo]

            if(typeof valor !== 'string'|| valor.length === 0) {
                throw new Error(`O campo '${campo}' está invalido`)
            }
        })
    }
}
module.exports = Produto;