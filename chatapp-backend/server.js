import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express()
const port = process.env.PORT || 9000

// Middleware

// DB config

// API Endpoints
app.get("/",(req,res) => res.status(200).send("Hello Developer"))


app.listen(port,()=> console.log(`Listening on localhost: ${port}`))