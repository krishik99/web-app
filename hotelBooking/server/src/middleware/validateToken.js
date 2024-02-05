import jwt from 'jsonwebtoken';

const validateToken = (req,res,next) => {
    const token = req.cookies["auth_token"];
    console.log("REQUEST",req.cookies);
    if(!token){
        return res.status(401).send({message:"Unauthorized Access"})
    }

    try{
       const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
       console.log("decoded",decoded);
       req.user = decoded.user;
       next();
    }catch(error){
        return res.status(401).send({message:"Unauthorized Access"})
    }
}
export default validateToken;