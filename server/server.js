const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const NurseRouter = require('./Routes/nurse-route');
const app=express();


dotenv.config({path:'./config.env'});

app.use(express.json());

const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(()=>{
    console.log("Connected To MongoDB");
}).catch(err=> {
    console.log("DB Disconnected");
})

app.use('/api/nurses',NurseRouter);


const port =process.env.PORT||11000;

app.listen(port,()=>{
    console.log(`Server is Runniung on port ${port}`);
})