<h1 align="center">  
KPI's Case FullStack
</h1>

Case KPI's

## 🚀 Deploy

Backend: https://kpis-deploy.herokuapp.com/users
Frontend: https://kpis-deploy.surge.sh/


## ⬅️ Backend
### Sobre o projeto 

API REST criada para gerenciar um banco de dados de uma empresa. Nessa API, podemos logar e buscar usuários. 
O projeto conta com autenticação JWT e testes unitários. 
A API foi desenvolvida utilizado as tecnologias TYPESCRIPT, NODE.JS, EXPRESS.JS, PostgreSQL como banco de dados e JEST para testes unitários. Além disso, o projeto foi 
estruturado utilizando PROGRAMAÇÃO ORIENTADA A OBJETOS (POO).

## 📄Documentação

https://documenter.getpostman.com/view/15825788/2s83zjtP9Q

Os endpoints também podem ser testados diretamente no projeto através do arquivo ``requests.rest``

## ✔️ Features

👤 Login

- [x] Para realizar o login, basta informar seu e-mail. O retorno deve conter o token de autenticação do usuário.

🔎 Busca de Funcionários

- [x] O sistema deve buscar todos os funcionários liderados (diretos e indiretos) por quem efetuar o login.


<h2 id="back"> 🎲 Rodando o Backend (servidor)</h2>

### Pre-Requisitos

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- Uma instancia de um banco de dados PostgreSQL
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/lausompac/case-kpi.git
2. cd case-kpi
3. cd backend
```
* Para instalar e rodar o projeto
```
4. npm install
5. npm dev
    ou
4. yarn install
5. yarn dev
```
* Para rodar os testes 
```
6. npm test
6. yarn test
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

## ➡️ Frontend

### Sobre o projeto

Aplicação que exibe o Headcount e o Turnover de uma empresa. Na primeira página o usuários efetua seu login. Na página seguinte são exibidos gráficos que representam a média de Headcount e Turnover dos liderados diretos e indiretos do usuário logado. A aplicação foi desenvolvida em React.

##  🎲 Rodando o Frontend

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/lausompac/case-kpi.git
2. cd case-kpi
3. cd backend
```
* Para instalar e rodar o projeto
```
4. npm install
5. npm dev
    ou
4. yarn install
5. yarn dev
```

## 🛠 Tecnologias utilizadas

- React

#### :books: Bibliotecas utilizadas:
  - [axios](https://github.com/axios/axios)
  - [material-ui](https://mui.com/pt/)
  - [react-router-dom](https://v5.reactrouter.com/)
  - [styled-components](https://styled-components.com/)
  - [nivo.rocks](https://nivo.rocks/)


## 👨‍💻 Desenvolvedor:


<a href="https://github.com/lausompac">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101334115?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Laura Campos</b></sub></a> <a href="https://github.com/lausompac" title="github"></a>
 <br>
 <br>



