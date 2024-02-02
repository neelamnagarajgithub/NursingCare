const express=require('express');
const {getallusers,createuser,getuserbyid,updateuser,deleteuser}=require('../controllers/user-controller');
const UserRouter=express.Router();

UserRouter
.router('/')
.get(getallusers)
.post(createuser)

UserRouter
.router('/:id')
.get(getuserbyid)
.patch(updateuser)
.delete(deleteuser)