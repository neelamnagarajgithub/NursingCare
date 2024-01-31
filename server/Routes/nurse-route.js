const nurse=require('../models/nursemodel');
const {getallnurses,createnurse,getnursebyid,UpdateNurse,deleteNurse}=require('../controllers/nurses-controller');
const express=require('express');

const NurseRouter=express.Router();

NurseRouter.
  route('/')
  .get(getallnurses)
  .post(createnurse)

NurseRouter
.route('/:id')
.get(getnursebyid)
.patch(UpdateNurse)
.delete(deleteNurse)

module.exports=NurseRouter;