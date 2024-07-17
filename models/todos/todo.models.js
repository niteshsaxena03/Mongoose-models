import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
   content:{
     type:String,
     required:true,
   },
   completed:{
     type:Boolean,
     required:true,
   },
   createdBy:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User",
   }
},{timestamps:true});

export const todo = mongoose.model('Todo', todoSchema);
