const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE
const PORT  = process.env.PORT

mongoose.connect(DB, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        })
        .then(()=>{
             console.log(`Connection Successfull`)
        })
        .catch((err) => console.log(`no connection`))

//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello World!!`)
    next()
}


app.get('/',(req,res)=>{
    res.send(`Hello world from the server`)
})
app.get('/about',middleware,(req,res)=>{
    console.log('Hello About')
    res.send(`About from the server`)
})
app.get('/contact',(req,res)=>{
    res.send(`contact from the server`)
})
app.get('/signin',(req,res)=>{
    res.send(`Login from the server`)
})
app.get('/signup',(req,res)=>{
    res.send(`Registeration from the server`)
})
console.log('Hello World')


app.listen(3000, ()=>{
    console.log(`server is running at port ${PORT}`)
})