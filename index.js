const express = require ('express')
// import express from 'express'

const app = express()

app.use(express.json())

const port = process.env.PORT || 3300

app.listen(3000, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
    
})

