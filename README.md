<h1 align="center">  
KPI's Case FullStack
</h1>

Case KPI's

## Sobre o projeto

Backend:

API REST criada para gerenciar um banco de dados de uma empresa. Nessa API, podemos logar e buscar usuários. 
O projeto conta com autenticação JWT e testes unitários. 
A API foi desenvolvida utilizado as tecnologias TYPESCRIPT, NODE.JS, EXPRESS.JS, PostgreSQL como banco de dados e JEST para testes unitários. Além disso, o projeto foi 
estruturado utilizando PROGRAMAÇÃO ORIENTADA A OBJETOS (POO).

## 📄Documentação

https://documenter.getpostman.com/view/15825788/2s83zjtP9Q

Os endpoints também podem ser testados diretamente no projeto através do arquivo ``requests.rest``

## 🚀 Deploy

https://kpis-deploy.herokuapp.com/users

## ✔️ Features - Backend

👤 Login

- [x] Para realizar o login, basta informar seu e-mail. O retorno deve conter o token de autenticação do usuário.

🔎 Busca de Funcionários

- [x] O sistema deve buscar todos os funcionários liderados (diretos e indiretos) por quem efetuar o login.


<h2 id="back"> 🎲 Rodando o Backend (servidor)</h2>

### Pre-Requisitos

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/),
- Uma instancia de um banco de dados PostgreSQL
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/lausompac/case-kpi.git
2. cd case-kpi
```
* Para instalar e rodar o projeto
```
3. npm install
4. npm dev
    ou
3. yarn install
4. yarn dev
```
* Para rodar os testes 
```
5. npm test
5. yarn test
```

Crie um arquivo ```.env``` na raiz do projeto e preencha as variáveis com seus dados do banco de dados PostgreSQL e dados do JWT. 
Essa instrução é fundamental para a execução do servidor.

```
PORT = 
DB_HOST = 
DB_NAME = 
DB_USER = 
DB_PASSWORD = 

JWT_KEY = minhasenhasegura1234
JWT_EXPIRES_IN = 24h

```


## 🛠 Tecnologias utilizadas

- Typescript;
- Express;
- Cors;
- Knex; 
- SQL

## 🚀 Aplicações utilizadas

- VSCode;
- pgAdmin4;
- Postman;

## 👨‍💻 Desenvolvedor:


<a href="https://github.com/lausompac">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101334115?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Laura Campos</b></sub></a> <a href="https://github.com/lausompac" title="github"></a>
 <br>
 <br>



