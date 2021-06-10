# API-ecom - Desafio Gama Academy 

HACKER - DESAFIO EM GRUPO 1
Olá Hackers tudo bem?

Ufa… passamos pela primeira etapa! Parece que não iria acabar nunca né?

Bom, agora vamos para uma parte mais aplicada de toda essa história. Vamos começar a trabalhar aspectos de construção de um BackEnd para expor uma API. Bora lá.

Qual o contexto?

Lembra da aplicação de e-Commerce que contextualizamos no Desafio 1? Pois bem. Vamos continuar trabalhando em cima desta aplicação, ok?

Qual o objetivo, então?

Vamos criar uma API para expor os dados de um banco de dados, usando as seguintes tecnologias:

Bancos de Dados: MySQL

Back End: NODE + ExpressJS

O objetivo é reaproveitar o banco de dados que vocês implementaram no desafio #1 e “expor” uma API para consultar/cadastrar objetos no banco de dados.

A arquitetura vai ser próxima a este esquema aqui:




O Banco de dados MySQL irá manter as tabelas e registros. Node + Express serão utilizados para você desenvolver, em Javascript, o Application Server que irá conectar-se no banco e oferecer, através de Endpoints HTTP, as funcionalidades de recuperação e inserção de dados nesta base de dados.



Mas quais funcionalidades? Observe a tabela a seguir

Endpoint

Operação HTTP

Explicação

/produto

GET

Retorna a lista de todos os produtos existentes. Uma lista em formato JSON contendo todos os produtos da tabela.  Para o Exercicio 1, a logica toda de verificação. de se o produto existe ou não deve ser feita. A lista de produtos deve estar hardcoded. Para o exercicio 2, vamos puxar essa lista de uma base de dados que voces podem usar a já criada ou criar uma nova se quiser.

/produto/{id}

GET

Retorna os detalhes de 1 único produto. Um único objeto JSON recuperado a partir do ID fornecido como componente da URL. Se o ID existir na tabela, deve retornar o status HTTP 200 - ok, ou 404 caso contrário.

/produto

POST

Recebe um JSON com dados de um produto e o inclui na base de dados. Retorna para o usuário o Objeto que foi incluído na tabela. Se o objeto for enviado com alguma informação faltando (ex: sem descrição ou preço zerado), deve retornar um status HTTP 400 - Bad Request. 

/produto/{id}

PUT

Recebe um JSON com dados de um produto, cujo ID é especificado na URL e atualiza seus dados na base de dados. Se o ID do produto não existir na base de dados, deve retornar um status 404 - Not Found. Se for recebido um objeto incompleto ou com alguma propriedade inválida (preço zerado), retorna um status HTTP 400 - Bad Request. Se tudo estiver ok, retorna o próprio objeto atualizado com status 200 - Ok

/departamento

GET

Retorna a lista de todos os departamentos

/departamento/{id}

GET

Retorna o departamento e a lista de produtos que estão associadas a ele. Se o departamento não exisitir na base de Dados, retorna um status 404 - Not Found, ou o departamento e sua lista de produtos, com status 200 - Ok



Entrega 1 - Mock em Hard Code

 As APIs devem respeitar o protocolo RESTFul. O que isso quer dizer? A API deve respeitar os status HTTP retornando 404, 200 etc de acordo com o resultado da operação.

Nesta 1a entrega não haverá integração com bancos de dados. Vocês devem trabalhar com dados em memória (valores fixos mesmo)

Você pode escolher quais id de produto (por exemplo) existem, e com isso quando estes id forem especificados na URL de testes, vocês poderão comparar com sua lista e retornar os valores.



O que deve ser entregue:

Entrega 1: Projeto no GIT

1 - Link do projeto do GIT 

2 - Descrição de como rodar tudo descrito no README do Repositório (desde baixar/clonar o repositório até quais dependências/bibliotecas foram utilizadas)

3 - Quais casos de testes devem ser feitos, ou seja, quais ID de produto ou departamento retornam valores válidos e quais retornam códigos referentes a IDs não encontrados ou mesmo quais casos de testes retornam BAD REQUEST

4-  O código deve rodar sem exceptions (no console do NODE) nos casos mencionados no README



Critérios para nota:

Os 6 métodos funcionando e com as lógicas corretas. 

As lógicas de validação de inputs de entrada devem ser feitas. Os ids dos produtos e departamentos devem estar codificados de forma hardcoded (ou seja, fixando valores válidos e valores inválidos) por agora. Vamos medir sua capacidade de criar e disponibilizar uma API para processar as requisições da tabela informada de acordo com os dados que vocês determinaram na API.

