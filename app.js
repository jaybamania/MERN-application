const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(`Hello world from the server`)
})
app.get('/about',(req,res)=>{
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
    console.log(`server is running at port 3000`)
})