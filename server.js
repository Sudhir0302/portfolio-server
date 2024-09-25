require('dotenv').config()
const express = require('express')
const app = express()
const dbConn = require('./config/db')



// const dotenv =require('dotenv')
// dontenv.config()

const port = process.env.PORT || 3334

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message:"welcome"})
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})