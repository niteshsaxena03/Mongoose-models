import mongoose from "mongoose";

const medidal_recordSchema=new mongoose.Schema({});

export const Medidal_record=mongoose.model("Medidal_record",medidal_recordSchema);