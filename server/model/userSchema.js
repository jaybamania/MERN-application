const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    isLoggedIn:{
        type:Boolean,
        default:false
    },
    messages:[
        {
            name:{
                type: String,
                required: true
            },
            email:{
                type: String,
                required: true
            },
            phone:{
                type: Number,
                required: true
            },
            message:{
                type: String,
                required: true
            },
        }
    ],
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }
    next()
})

//generating JWT Token

userSchema.methods.generateAuthToken = async function(){
    try{
        let getToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token:getToken })
        await this.save()
        return getToken
    }catch(err){
        console.log(err)
    }
}

//stored the message

userSchema.methods.addMessage = async function(name, email,phone, message){
    try{
        this.messages = this.messages.concat({name, email,phone, message})
        await this.save()
        return this.messages
    }catch(error){
        console.log(error)
    }
}

//check the user logged in or not

userSchema.methods.checkUserLogin = async function(state){
    try{
        this.isLoggedIn = state
        await this.save()
        return this.isLoggedIn
    }catch(error){
        console.log(error)
    }
}

const User = mongoose.model('USER',userSchema)

module.exports = User