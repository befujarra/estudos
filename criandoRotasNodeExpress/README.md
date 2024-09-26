Projeto Express - Rotas de Frutas
Este projeto é uma aplicação simples em Node.js utilizando o framework Express. Ele expõe algumas rotas que respondem com informações sobre frutas, como abacate e morango.

Pré-requisitos/Instalação
Node.js - npm init -y
Express - npm install express


Executar o servidor
node ./index.js

Endpoints
GET /abacate:

Retorna uma mensagem simples sobre abacate.
Exemplo de uso: http://localhost:3000/abacate

GET /morango:

Retorna o valor do parâmetro morango enviado via query string.
Exemplo de uso: http://localhost:3000/morango?morango=dados
