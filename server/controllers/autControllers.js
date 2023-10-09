const userModel = require("../model/db")
const {hashPassword, comparePassword} = require('../hashpas/auth')

const test = (req,res) =>{
    res.json('text is working')
}

const register = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if (!name) {
            return res.json({
                error:'name is required'
            })
        }

        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({
                error:'Email is already exist'
            })
        }else if(!email){
            return res.json({
                error:'Email is required'
            })
        }if (!password || password.length < 6) {
            return res.json({
                error:"password is required and should be at least 6 characters"
            })
        }
        
        const hashedPassword = await hashPassword(password)
        const user = await userModel.create({
            name,email,password:hashedPassword,
        })
        return res.json(user)

    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req,res) =>{
   
    try {
        const {email, password} = req.body
        
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({
                error: "email not exist"
            })
        }
        
        const pass = await comparePassword(password, user.password)
        if(pass){
          res.json("password match")
        }else if(!pass){
            res.json({
                error:"password do not match"
            })
        }
        
    } catch (error) {
        console.log(error);
    }
   
    
}

module.exports = {
    test,
    register,
    loginUser
}