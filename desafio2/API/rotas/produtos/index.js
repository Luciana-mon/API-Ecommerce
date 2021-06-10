const roteador = require('express').Router()
const TabelaProduto = require('./TabelaProduto')
const Produto = require('./Produto')


roteador.get('/produtolista', async (requisicao, resposta) => {
    //vai esperar esse metodo terminar de executar para depois enviar um json
    const resultados = await TabelaProduto.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/incluirproduto', async (requisicao, resposta) => {
        try{
            const dadosRecebidos = requisicao.body
            const produto = new Produto(dadosRecebidos)
            await produto.criar()
            resposta.status(201)
            resposta.send(
                JSON.stringify(produto)
            )
        }catch(erro){  
            resposta.status(400) 
            resposta.send(
                JSON.stringify({
                    mensagem : erro.message
                })
            )
        }
    })

roteador.get('/:idProduto', async (requisicao,resposta, proximo) => {
        try{
            const id = requisicao.params.idProduto
            const produto = new Produto({id : id})
            await produto.carregar()
            resposta.status(200)
            resposta.send(
                JSON.stringify(produto))
        }catch(erro){
            proximo(erro)
        }
})

roteador.put('/:idProduto', async (requisicao,resposta) => {
   try{
    const id = requisicao.params.idProduto
    const dadosRecebidos = requisicao.body
    const dados = Object.assign({}, dadosRecebidos,{id : id})
    
    const produto = new Produto(dados)
    await produto.atualizar()
    resposta.status(204)
    resposta.end()

   }catch(erro){
        resposta.status(404)     
        resposta.send(
            JSON.stringify({
                mensagem : erro.message,
                id: erro.idErro
            })
        )
   }
})


roteador.delete(('/:idProduto'),  async (requisicao,resposta) => {
    
      
     try{
        const id = requisicao.params.idProduto
        const produto = new Produto({id : id})
        await produto.carregar()  
        await produto.remover()
        resposta.status(204)
        resposta.end()

     } catch (erro){
         resposta.status(404)
        resposta.send(
            JSON.stringify({
                mensagem : erro.message
            })
        )
     }
 })
module.exports = roteador