import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName:  { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password:  { type: String, require: true },
});

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password ,8)
    }
    next();
})

const User = mongoose.model('users',userSchema);

export default User;