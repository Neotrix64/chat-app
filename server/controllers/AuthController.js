//2

import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'
const maxAge = 3 * 24 * 60 * 60 * 2000

const createToken = (email,userID)=> {
    return jwt.sign({email,userID},process.env.JWT_KEY,{expiresIn: maxAge});
}

export const signup = async (req,res,next) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send("email and password is required");
        }
        const user = await User.create({email: email,password: password});
        res.cookie("jwt",createToken(email,user.id),{
            maxAge,
            secure:true,
            sameSite: "None"
        })
        return res.status(201).json({user:{
            id:user.id,
            email:user.email,
            profileSetup:user.profileSetup,
        }})
    } catch (error) {
        console.log({error});
        return res.status(500).send("Internal Server Error")
    }
}