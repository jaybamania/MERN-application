const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require("cookie-parser");
const app = express()

dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
app.use(cookieParser());
// const USER = require('./model/userSchema')

const PORT  = process.env.PORT || 5000

//linking router files
app.use(require('./router/auth'))


// app.get('/',(req,res)=>{
//     res.send(`Hello world from the server`)
// })
// app.get('/about',(req,res)=>{
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