import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    uniqueL: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    uniqueL: true,
    lowercase: true,
  },
  password:{
    type:String,
    required:true,
  }
});

export const User = mongoose.model('User', userSchema);
