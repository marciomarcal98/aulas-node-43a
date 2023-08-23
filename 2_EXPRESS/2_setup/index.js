const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Estou começando minha vida com o back-end. Que tistreza!')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})