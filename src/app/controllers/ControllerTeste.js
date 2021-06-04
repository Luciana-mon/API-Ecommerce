import {
    listaproduto
} from './produtos';
import {
    departamento
} from './departamento';


class ControllerTeste {



    async updateput(req, res) {        
        const {id} = req.params
        const produto = [req.body]
        
      
        const posicao = listaproduto.findIndex(produto => produto.codProduto == id) 
        
        if(posicao < 0){
            return res.status(404).json({error: "Produto não encontrado"})
        }
      
        function validarProduto(produto) {
            if (produto[0].codProduto && produto[0].descricao && produto[0].preco && produto[0].qtdEstoque && produto[0].disponivel && produto[0].emDestaque && produto[0].departamento) {
                if (produto[0].preco > 0) {
                    const prod = produto[0]
                    return prod
                } else {
                    return false
                }
            } else {
                return false
            }
      
        }
        const produtoValidado = validarProduto(produto);
      
        if (!produtoValidado) {
            return res.status(400).json({
                error: 'Esta faltando algo'
            })
        } else {
          listaproduto[posicao] = produtoValidado
          res.status(200).json(listaproduto[posicao])
        }
      }

   


    async storepost(req, res) {
        const produto = [req.body]

        function validarProduto(produto) {
            if (produto[0].codProduto && produto[0].descricao && produto[0].preco && produto[0].qtdEstoque && produto[0].disponivel && produto[0].emDestaque && produto[0].departamento) {
                if (produto[0].preco > 0) {
                    const prod = produto[0]
                    return prod
                } else {
                    return false
                }
            } else {
                return false
            }

        }
        const produtoValidado = validarProduto(produto);

        if (!produtoValidado) {
            return res.status(400).json({
                error: 'Esta faltando algo'
            })
        } else {
            listaproduto.push(produtoValidado)
            return res.json(produtoValidado)
        }


    }

    async listaDepartamento(req, res) {
        return res.status(200).json(departamento)

    }

    async departamentoid(req, res) {
        const {
            id
        } = req.params

        const buscadepartamento = departamento.find(departamento => departamento.idDepto == id);

        if (!buscadepartamento) {

            return res.status(404).json({
                error: 'Esta faltando algo'
            })

        } else {
            const buscaProduto = listaproduto.filter(produto => produto.departamento == id);

            return res.status(200).json([{
                idDepto: buscadepartamento.idDepto,
                nomeDepartamento: buscadepartamento.nomeDepto,
                produto: buscaProduto

            }]);

        }

    }


    async produtoLista(req, res) {
        return res.status(200).json(listaproduto)

    }

    async produtoId(req, res) {
        const {
            id
        } = req.params
        const buscaProduto = listaproduto.find(produto => produto.codProduto == id);


        if (!buscaProduto) {

            return res.status(404).json({
                error: 'Esta faltando algo'
            })

        } else {

            return res.status(200).json(buscaProduto)

        }

    }


    
    

    

}

export default new ControllerTeste();