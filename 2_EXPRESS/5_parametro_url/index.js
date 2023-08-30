const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id

    console.log(`Usuário: ${id}`)

    res.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000)