import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    userId:{type:String,require:true},
    hotelName:{require:true,type:String},
    city:{require:true,type:String},
    country:{require:true,type:String},
    description:{require:true,type:String},
    type:{require:true,type:String},
    adults:{require:true,type:Number},
    children:{require:true,type:Number},
    facilites:{require:true,type:Array},
    pricePerNight:{require:true,type:Number},
    rating:{require:true,type:Number},
    imageUrls:{require:true,type:String},
    lastUpdated:{require:true,type:Date},
});


const Hotel = mongoose.model('hotel',hotelSchema);

export default Hotel;