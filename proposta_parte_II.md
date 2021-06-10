# Entrega 2:
Agora vamos integrar seu Back End que atualmente está com dados mock com o banco de dados contendo as tabelas departamento e produto.

# Como deve funcionar?
Seu Servidor em Express (ou outro framework que queira usar) deve continuar implementando as mesmas funcionalidades descritas na tabela anterior e agora, ao invés de retornar dados fixos, deve fazer as operações (CRUD) no banco de dados.

# O que deve ser entregue:

- Link do GITHUB do projeto contendo no README.MD

- Arquivos JS para testes pelo avaliador

- Script SQL para criação da base de dados, criação das tabelas e inserção dos dados

- Roteiro para testar o servidor 

- Casos de testes válidos para recuperação nas operações:

    - /produto/{id}

    - /departamento/{id}

- Rotinas válidas para inserção de novos produtos (a operação POST /produto) deve inserir sim um novo produto na base de dados (podendo ser consultada depois pela operação GET /produto) e também a operação PUT deve alterar um produto existente e essa alteração ser refletida no registro do banco de dados.




