import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';
import HotelRoutes from './routes/Hotel.js'
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})
main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
}

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.CLIENT_BASE_URL,
    credentials:true
}
))
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/hotel/create',HotelRoutes)
const server = app.listen(3000,()=>{
    console.log('server running on port 3000')
})
// server.closeAllConnections