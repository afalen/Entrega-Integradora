const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users.router')
const productsRouter = require('./routes/products.router')
const app = express()
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())

mongoose.connect('mongodb+srv://ecommerceArmandof:falen159@cluster0.yopbtr6.mongodb.net/ecommerce?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado a la DB de Mongo Atlas")
})
.catch(error=>{
    console.error("Error en la conexión\n", error)
})

app.use('/users', usersRouter)
app.use('/products', productsRouter)