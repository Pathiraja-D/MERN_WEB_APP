import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://pathiraja:pathiraja%40123@mern-estate.gxhpbez.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected to mongodb!');
})
.catch((err)=>{
    console.log(err);
});

const app = express();
app.listen(3000,()=>{
    console.log('Server is running');
});

