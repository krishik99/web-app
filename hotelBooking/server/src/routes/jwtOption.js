import jwt from 'jsonwebtoken';
const getToken = (user)=> {
    const token = jwt.sign(
        {user : user},
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:'1d'
        }
    )
    return token;
}

export default getToken;