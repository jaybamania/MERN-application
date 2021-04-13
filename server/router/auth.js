const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/conn')

const User = require('../model/userSchema')
router.get('/',(req,res)=>{
    res.send(`Hello world from the server Router JS`)
})

//Registeration Route

//Using Promises
// router.post('/register',  (req,res)=>{
//     const {name, email,phone, work, password, cpassword} = req.body
//     // console.log(name)
//     // console.log(work)
//     // console.log(req.body)
//     // res.json({message:req.body})
//     // res.send("Registeration Done")
//     if(!name ||  !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"All the Fields are Required"})
//     }
//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json({error:"Email already Exists"})
//         }
//         const user = new User({name, email,phone, work, password, cpassword})
//         //saving the user data in the User Collection
//         user.save().then(()=>{
//             res.status(201).json({message:"User Registered Successfully"})
//         }).catch((err)=> res.status(500).json({error:"Failed to registered"}))
//     })
//     .catch( err => console.log(err))
// })


//Async-Await
router.post('/register', async (req,res)=>{
    const {name, email,phone, work, password, cpassword} = req.body
 
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"All the Fields are Required"})
    }
    try{
        const userExist = await User.findOne({email:email})

        if(userExist) {
            
            return res.status(422).json({error:"Email already Exists"})

        }else if(password != cpassword){

            return res.status(422).json({error:"Passwords doesn't match!"})

        }else{
            const user = new User({name, email,phone, work, password, cpassword})

            await user.save()

            res.status(201).json({message:"User Registered Successfully"})
        }
    }
    catch(err){
        err => console.log(err)
    }
    
})

//Login Route

router.post('/signin', async (req,res)=>{
    try{
        const {email, password} = req.body
        let token
        if(!email || !password){
            return res.status(400).json({message:"Please Fill the Data"})
        }

        const userLogin = await User.findOne({email:email})

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            token = await userLogin.generateAuthToken();
            console.log(token)

            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials"})
            }else{
                res.json({message:"User Login Successfully"})
            }       
        }else{
            res.status(400).json({error:"Invalid Credentials"})
        }

        
    }catch(err){
        console.log(err)
    }
})


module.exports = router