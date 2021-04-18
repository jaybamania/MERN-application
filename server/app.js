const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
// const USER = require('./model/userSchema')

const PORT  = process.env.PORT

//linking router files
app.use(require('./router/auth'))


//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello World!!`)
    next()
}

// app.get('/',(req,res)=>{
//     res.send(`Hello world from the server`)
// })
// app.get('/about',middleware,(req,res)=>{
//     console.log('Hello About')
//     res.send(`About from the server`)
// })
// app.get('/contact',(req,res)=>{
//     res.cookie("Testing", "Contact-Tab")
//     res.send(`contact from the server`)
// })
// app.get('/signin',(req,res)=>{
//     res.send(`Login from the server`)
// })
// app.get('/signup',(req,res)=>{
//     res.send(`Registeration from the server`)
// })
console.log('Hello World')


app.listen(3000, ()=>{
    console.log(`server is running at port ${PORT}`)
})