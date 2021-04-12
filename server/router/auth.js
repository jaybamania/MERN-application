const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`Hello world from the server Router JS`)
})

router.post('/register',(req,res)=>{
    console.log(req.body)
    res.json({message:req.body})
    res.send("Registeration Done")
})

module.exports = router