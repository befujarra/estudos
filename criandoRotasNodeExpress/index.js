const express = require('express');
const server = express();
const PORT = 3000;

server.get('/abacate', (request, response)=>{
    return response.send("essa é a rota do abacate")
})

server.get('/morango', (request, response)=>{

    const morango = request.query.morango
    return response.send(morango)
    
})



server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });