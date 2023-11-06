import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.use(express.json());


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

//Middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});