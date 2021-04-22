const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/conn')

const User = require('../model/userSchema')

const authenticate = require('../middleware/authenticate')

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
    console.log(name)
    console.log(password)
    console.log("Connected to React")
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

            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"Invalid Password"})
            }else{
                res.json({message:"User Login Successfully"})
            }       
        }else{
            res.status(400).json({error:"Invalid Email"})
        }

        
    }catch(err){
        console.log(err)
    }
})

//About Us Routing

router.get('/about',authenticate,(req,res)=>{
    console.log('Hello About')
    res.send(req.rootUser)
})


//to get data in home and contact page
router.get('/data',authenticate,(req,res)=>{
    console.log('Hello About')
    res.send(req.rootUser)
})

//send message in contact page
router.post('/contact',authenticate, async (req,res)=>{
    try{
        const {name, email, phone, message} = req.body

        if(!name || !email || !phone || !message){
            console.log("All Fields are require")
            return res.json({error:"Please Fill the Contact Form Details"})
        }

        const userContact = await User.findOne({_id:req.userID})
        if(userContact){
            const userMessage = await userContact.addMessage(name, email,phone, message)

            await userContact.save()

            res.status(201).json({message:"Message Sent Successfully"})
        }
    }catch(error){
        console.log(error)
    }
})

//Logout Routing

router.get('/logout',(req,res)=>{
    console.log('Hello my Logout')
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send(req.rootUser)
})

module.exports = router