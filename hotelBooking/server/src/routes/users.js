import express from 'express';
import User from '../model/User.js';
import {check, validationResult} from 'express-validator'
const router = express.Router();

router.post('/register', [
    check("firstName","FirstName is required").isLength({min:3}),
    check("lastName","LastName is required").isLength({min:1}),
    check("email","Please enter an valid E-mail").isEmail(),
    check("password","please enter password with 6 or more characters").isLength({min:6})
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()[0].msg})
    } 
    try{
        let user = await User.findOne({
            email: req.body.email
        })

        if(user){
            return res.status(400).json({message:'User already exists'})
        }else{
            user = new User(req.body)
            const registeredUser = await user.save()
            return res.status(200).json(registeredUser);
        }        
    }catch(error){
       return res.status(500).send({message:'Something went wrong!'})
    }
})

export default router;