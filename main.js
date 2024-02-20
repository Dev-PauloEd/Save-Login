// NODE IMPORTS
const express = require('express')
const router = require('./app/routes')

// CONFIGURAÇÕES
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(8080, ()=>{
    console.log('servidor rodando, mano...')
})