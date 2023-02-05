# Projeto CRUD em NodeJS com MongoDB Atlas
Este é um projeto que consiste em um CRUD simples, construído com NodeJS e conectado ao banco de dados gratuito MongoDB Atlas. Este projeto faz parte da mentoria CSV23🚀🚀🚀.


## 📚 Bibliotecas utilizadas
- Express 4.17.3
- Mongoose 6.2.6
- Nodemon 2.0.15 (Somente para desenvolvimento)

## 🛠 Como usar
- Iniciar o Git.
- Clone este repositório com git clone.
- Instale as dependências do projeto com npm install.(install express@4.17.3 , install mongoose@6.2.6)
- Inicie o projeto com npm start.

## 🗝 Postman
- O Postman foi utilizado para testar os verbos HTTP. 
- Endereço do servidor local é http://localhost:3000/ 

## ⚠ Arquivos importantes
- config/mongoConection.js - Contém a configuração da conexão com o MongoDB Atlas.
- routes/index.js - Contém as rotas da aplicação.
- app.js - Contém a configuração do Express e a importação das bibliotecas e rotas.
- controllers\tarefasControllers.js - Define os controles para  Visualizar, Excluir, Inserir, Alterar.
- models\Tarefas.js - Arquivo aonde é guardado o Schema de cada tarefa. 

## 📗 MongoDB Atlas
Após criar uma conta no MongoDB é preciso adcionar a String de conexão para o seu código esta String está dentro do arquivo config/mongoConection.js.
Exemplo : "mongodb+srv://Usuario:<password>@<Cluster>.xgrmd7m.mongodb.net/<Base-de-Dados>".


