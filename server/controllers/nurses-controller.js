const express = require("express");
const Nurse = require("../models/nursemodel");

const getallnurses = async (req, res) => {
  try {
    const allnurse = await Nurse.find();
    res.status(200).json({
      status: "success",
      allnurse,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const createnurse = async (req, res) => {
  try {
    const newnurse = await Nurse.create(req.body);
    res.status(201).json({
      status: "success",
      newnurse,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getnursebyid = async (req, res) => {
  try {
    const nurseid = await Nurse.findById(req.params.id);
    res.status(200).json({
      status: "success",
      nurseid,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
const UpdateNurse = async (req, res) => {
  try {
    const updatednurse = await Nurse.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });
    res.status(200).json({
      status: "success",
     updatednurse
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteNurse = async (req, res) => {
  try {
    const deletenurse = await Nurse.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    deletenurse,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports={getallnurses,createnurse,getnursebyid,UpdateNurse,deleteNurse};
