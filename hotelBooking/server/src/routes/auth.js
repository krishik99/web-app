import express from 'express'
import User from '../model/User.js';
import getToken from './jwtOption.js'
import bcrypt from 'bcryptjs';
import {check, validationResult} from 'express-validator'
import validateToken from '../middleware/validateToken.js';
const router = express.Router();

router.post('/login',[
    check("email","E-mail is required").isEmail(),
    check("password","please enter password with 6 or more characters").isLength({min:6})
], async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({message:errors.array()[0].msg});
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({email:email})
        if(!user){
           return res.status(400).json({message:"Invalid Credentials"});
        }
        console.log(email,password,user.password)
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
           return res.status(400).json({message:"Invalid Credentials"});
        }else{
            const token = getToken(user)
            res.cookie("auth_token",token,{
                httpOnly:true,
                secure:process.env.NODE_ENV === "PRODUCTION",
                maxAge:86400000
            })
           return res.status(200).json({user});
        }
    } catch (error) {
        console.log(error)
       return res.status(500).send({message:'Something went wrong!'})
    }
})

router.get('/validate-token',validateToken,(req,res)=>{
    console.log('REQ',req)
    return res.status(200).json({user:req.user});
})

router.get('/invalidate-token',(req,res)=>{
    console.log('REQ',req)
    res.cookie("auth_token",null,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "PRODUCTION",
        maxAge:0
    })
    return res.status(200).send({ message:'token cleared' })
})

export default router;