const express = require('express')
const app = express()
const PORT = 5500
const connectDB = require('./db')
const Mongoose = request("mongoose")
connectDB()

const server =app.listen(PORT,() => console.log(`server connected to ${PORT}`))

process.on('unhandledRejection',err =>{
  console.log(`An Error Occure :${err.message}`)
  server.close(() => process.exit(1))
})

