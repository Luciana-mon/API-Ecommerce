# Desafio em grupo hacker 


Contexto:
 <p> _Somos parte de uma equipe de desenvolvimento de software que está criando uma série de ferramentas para gestão de eCommerces. Neste sentido, precisamos atender algumas necessidades de gestores destas plataformas. Precisamos criar soluções para ajudar nossos gestores a extrair dados de inventários de seus respectivos estoques._ </p>
 

Proposta: Vamos dar continuidade ao projeto de e-commerce que iniciamos no primeiro desafio
<a href="https://github.com/srtakatsumi/Gamma_Challenge">primeiro desafio</a>. Vamos trabalhar aspectos de construção em um BackEnd para expor uma API

Prazo: 
  - Primeira entrega dia 04/06 às 11:59:00 (antes do meio dia)
  - Segunda entrega dia 11/06 às 11:59:00 (antes do meio dia)


<p>Sprints: <br></p>
       - Recursos Humanos:  Amanda, Luciana, Victoria e Professores da Gama <br> 
       - Salvadores que auxiliaram no projeto Felipe e Italo. <br>
       - Ferramentas: Noteebok, internet, livros e vídeos. <br>
       - Softwares: IDE (Visual Code Studio), NodeJS e MySQL <br>
       

# Sprint 01 - Reunião de organização

  Reunião para definir as sprint do projeto e os proximos passos.
     - Pauta: 
            - Tempo de cada processo;
            - Nivel de conhecimento sobre o tema;
            
  
  Estimativa: 1 dias
   - [x] Status da Sprint: DONE


|                        Tarefa                           | Estimativa |  Início  |  Término  | Responsável |    Status    |
|---------------------------------------------------------|------------|----------|-----------|-------------|--------------|
|Criar link do projeto para cada um                       |    1 hrs   | 31/05/21 |  31/05/21 |    TODES    |     DONE     |
|Planejar a Sprint das tarefas                            |    3 hrs   | 31/05/21 |  31/05/21 |    TODES    |     DONE     |



# Sprint 02 - API 

  _ Iremos reaproveitar o <a href="https://github.com/srtakatsumi/Gamma_Challenge/tree/main/Atividade-parte-III"> Banco de dados </a>  que criamos no MySQL no desafio anterior.
  - E expor uma API para consultar/cadastrar os objetos no banco de dados


 Estimativa: 3 dias
   - [x] Status da Sprint: DONE 

|                            Tarefa                             | Estimativa |  Início  |  Término  | Responsável |   Status     |
|---------------------------------------------------------------|------------|----------|-----------|-------------|--------------|
|Endpoint                                                       |    1 hrs   | 31/05/21 |  04/06/21 |    TODES    |      DONE    |
|/produto                                                       |    1 hrs   | 31/05/21 |  04/06/21 |    AMANDA   |      DONE    |
|/produto/{id}                                                  |    1 hrs   | 31/05/21 |  04/06/21 |    AMANDA   |      DONE    |
|/produto                                                       |    1 hrs   | 31/05/21 |  04/06/21 |    LUCIANA  |      DONE    |
|/produto/{id}                                                  |    1 hrs   | 31/05/21 |  04/06/21 |    LUCIANA  |      DONE    |
|/departamento                                                  |    1 hrs   | 31/05/21 |  04/06/21 |   VICTORIA  |      DONE    |
|/departamento/{id}                                             |    1 hrs   | 31/05/21 |  04/06/21 |   VICTORIA  |      DONE    |
|Testes                                                         |    1 hrs   | 03/05/21 |  04/06/21 |    TODES    |      DONE    |

# Sprint 03 - Entrega primeira parte
  Nessa ultima etapa vamos falar validar se todos os requisitos para a entrega está correto
    - A descrição do README deve explicar desde baixar/clonar o repositório até quais dependências/bibliotecas foram utilizadas;
    - Base de testes, quais ID de produto ou departamento retornam valores válidos e quais retornam códigos referentes a IDs não encontrados ou mesmo quais casos de testes retornam BAD REQUEST
    - O código deve rodar sem exceptions, no console do NODE nos casos que estão mencionados no README
    
 Estimativa: 1 dias
   - [x] Status da Sprint: DONE 

|                            Tarefa                             | Estimativa |  Início  |  Término  | Responsável |   Status     |
|---------------------------------------------------------------|------------|----------|-----------|-------------|--------------|
|Link do projeto do GIT                                         |    1 hrs   | 31/05/21 |  04/06/21 |    TODES    |      DONE    |
|Descrição de como rodar tudo descrito no README do Repositório |    1 hrs   | 31/05/21 |  04/06/21 |    TODES    |      DONE    |
|Base de testes                                                 |    1 hrs   | 31/05/21 |  04/06/21 |    TODES    |      DONE    |
|O código deve rodar sem exceptions                             |    1 hrs   | 31/05/21 |  04/06/21 |    TODES    |      DONE    |


# Sprint 04 - Entrega segunda parte

 _Nessa segunda parte iremos vincular o Script SQL para criação da base de dados, criação das tabelas e inserção dos dados <br>

Rotinas válidas para inserção de novos produtos (a operação POST /produto) deve inserir sim um novo produto na base de dados (podendo ser consultada depois pela operação GET /produto) e também a operação PUT deve alterar um produto existente e essa alteração ser refletida no registro do banco de dados.

 Estimativa: 6 dias
   - [x] Status da Sprint: DONE 

|                            Tarefa                             | Estimativa |  Início  |  Término  | Responsável |   Status     |
|---------------------------------------------------------------|------------|----------|-----------|-------------|--------------|
|Reunião para ajustar o planejamento                            |    1 hrs   | 04/06/21 |  11/06/21 |    TODES    |      DONE    |
|Vincular o banco de dados no projeto                           |    1 hrs   | 04/06/21 |  11/06/21 |    TODES    |      DONE    |
|Readme                                                         |    3 hrs   | 09/06/21 |  10/06/21 |    TODES    |      DONE    |
|Testes                                                         |    1 hrs   | 10/06/21 |  10/06/21 |    TODES    |      DONE    |
|Entrega do proejto                                             |    1 hrs   | 11/06/21 |  11/06/21 |    TODES    |      DONE    |


