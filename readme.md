# Introdução

A proposta do projeto de API é dar continuidade ao <a href="https://github.com/srtakatsumi/Gamma_Challenge">primeiro desafio</a>, nessa fase iremos trabalhar aspectos de contrução em um BackEnd.

<p> Contexto: </p>
      
 Somos parte de uma equipe de desenvolvimento de software que está criando uma série de ferramentas para gestão de eCommerces. Neste sentido, precisamos atender algumas necessidades de gestores destas plataformas. Precisamos criar soluções para ajudar nossos gestores a extrair dados de inventários de seus respectivos estoques.</p> 
 

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
- <a href="http://localhost:8888/produtoslista"> /produtoslista</a>, retorna a lista de produtos<br> 
- <a href="http://localhost:8888/produtoid/">/produtoid/:id</a>, retorna um unico material solicitado, infomrar após o /produto/ o número do produto <br>
- <a href="http://localhost:8888/listaDepartamento"> /listaDepartamento</a>, retorna a lista de departamento <br>
- <a href="http://localhost:8888/departamento/:id"> /departamento/:id</a>, retorna todos os itens de um unico departamento <br>
<br>
Dentro do Postman colocar a chamada POST:<br>
- <a href="http://localhost:8888/incluirproduto"> /incluirproduto</a>, inclui produtos na url <br>
<br>
Dentro do Postman colocar a chamada PUT:<br>
- <a href="http://localhost:8888/alterarproduto/">/alterarproduto/:id </a>, altera um unico produto<br>

<br>    
# Bibliotecas

- Express <br>
- nodemon <br>
- sucrase <br>
