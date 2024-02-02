const user =require('../models/usermodel');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const signtoken=(id)=>{
    jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRESIN,
    })
}

const signup=async(req,res,next)=>{
 try{ const newuser=user.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
   passwConfirm:req.body.passwConfirm,
  });
   const token=signtoken();
  res.status(201).json({
    status:"success",
   token,
   data:{
    newuser,
   }
  })}catch(err) {
    res.status(200).json({
      status:"fail",
      message:err.message,
    })
    }
}

const login=async(req,res,next)=>{
  try{
    const {email,password}=req.body;

    if(!email||!password) {
      
    }

  }catch(err) {
  res.status(200).json({
      status:"fail",
      message:err.message,
    })
  }
}