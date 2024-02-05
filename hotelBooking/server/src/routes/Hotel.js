import express from 'express'
import Hotel from '../model/Hotel.js';
import multer from 'multer';
import validateToken from '../middleware/validateToken.js';
import {v2 as cloudinary} from 'cloudinary';
import {check, validationResult} from 'express-validator'
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer(
    {   
        storage:storage,
        limits:{
            fileSize: 5 * 1024 * 1024 //5mb
        }
    }
);

router.post('/', validateToken, [
    // check('hotelName','Hotel Name is required').isEmpty(),
    // check('city','City is required').isEmpty(),
    // check('country','country is required').isEmpty(),
    // check('description','Hotel description is required').isEmpty(),
    // check('type','Hotel Type is required').isEmpty(),
    // check('adults','Adult count is required').isEmpty().isNumeric(),
    // check('children','Children count is required').isEmpty().isNumeric(),
    // check('facilites','Hotel Name is required').notEmpty(),
    // check('pricePerNight','Hotel Name is required').isEmpty().isNumeric(),
    // check('imageUrls','Please Upload atleast 1 Image').isEmpty(),
] , upload.array("imageFiles",6), async(req,res) => {
    console.log(req)
    try{
        const imageFiles = req.files;
        const newHotel = req.body;
        const uploadPromises = imageFiles.map( async(image) => {
            const base64 = Buffer.from(image).toString("base64");
            let dataURI = "data:" + image.mimetype + ";base64," + base64;
            const res = await cloudinary.uploader.upload(dataURI);
            return res.url;
        })

        const imageUrls = Promise.all(uploadPromises);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.user._id;
        const hotel = new Hotel(newHotel);
        const addedHotel = await hotel.save();
        return res.status(201).send(addedHotel);
    }catch(error){
        console.log(error)
        return res.status(500).send({message:"Something went wrong!"});
    }

})

export default router;