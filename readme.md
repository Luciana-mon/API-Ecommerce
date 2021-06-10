# Introdução

A proposta do projeto de API é dar continuidade ao <a href="https://github.com/srtakatsumi/Gamma_Challenge">primeiro desafio</a>, nessa fase iremos trabalhar aspectos de contrução em um BackEnd.

<p> Contexto: </p>
      
 _Somos parte de uma equipe de desenvolvimento de software que está criando uma série de ferramentas para gestão de eCommerces. Neste sentido, precisamos atender algumas necessidades de gestores destas plataformas. Precisamos criar soluções para ajudar nossos gestores a extrair dados de inventários de seus respectivos estoques.</p>_ 
 

# Baixando o projeto

<h4>Desafio em grupo criando uma API:</h4> 

- Para baixar o repositório : <b>git clone  <a href="https://github.com/Luciana-mon/API-Ecommerce/">https://github.com/Luciana-mon/API-Ecommerce/ </a> </b> <br>
- Abrir o projeto no vscode <br>
- Para baixar o projeto <b>npm intall </b> <br>

- Para iniciar a aplicação: <b>npm run dev </b> <br>

- Seguir o passo a passo do proximo topico <br>


# Sobre o projeto

<p> Como executar a API: </p> <br>
      - abrir na web (firefox, chrome, explore) <a href="http://localhost:8888/">http://localhost:8000/</a>; <br>
      - é possivel acessar através do <a href="https://www.postman.com/downloads/">postman, clique aqui</a>, para fazer o download; <br>
      - também é possivel utilizar o <a href="https://web.postman.co/home">postman online</a>.<br>
      <br>
Como interagir com o localhost e localizar os dados:<br>
<br>
 GET: <br>           
- <a href="http://localhost:8888/api/produtos/produtoslista">/api/produtos/produtoslista</a>, retorna a lista de produtos<br> 
- <a href="http://localhost:8888/api/produtos/">/api/produtos/:idProduto</a>, retorna um unico material solicitado, informar após o /produtos/ o número do produto <br>

- <a href="http://localhost:8888/api/produtos/idProduto/2578"> /api/produtos/produtoid/:id</a>, retorna erro:  produto não encontrado. <br>

<br>


Dentro do Postman colocar a chamada POST:<br>
- <a href="http://localhost:8888/api/produtos/incluirproduto"> /api/produtos/incluirproduto</a>, inclui produtos na url <br>
<br>


Dentro do Postman colocar a chamada PUT:<br>
- <a href="http://localhost:8888/api/produtos/">/api/produtos/:idProduto </a>, altera um unico produto<br>
<br>

Dentro do Postman colocar a chamada DELETE:<br>
- <a href="http://localhost:8888/api/produtos/">/api/produtos/:idProduto </a>, deleta um unico produto <br>
<br>
# Bibliotecas

- Express <br>
- sequelize <br>
- Mysql <br>
- body-parser <br>
- config <br>
