const express = require('express')
const router = express.Router()

require('../db/conn')

const User = require('../model/userSchema')
router.get('/',(req,res)=>{
    res.send(`Hello world from the server Router JS`)
})

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
 
    if(!name ||  !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"All the Fields are Required"})
    }
    try{
        const userExist = await User.findOne({email:email})

        if(userExist) {
            return res.status(422).json({error:"Email already Exists"})
        }

        const user = new User({name, email,phone, work, password, cpassword})

        const userRegister = await user.save()

        res.status(201).json({message:"User Registered Successfully"})
    }
    catch(err){
        err => console.log(err)
    }
    
})


module.exports = router