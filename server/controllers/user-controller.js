const user = require("../models/usermodel");
const express = require("express");

const getallusers = async (req, res, next) => {
  try {
    const allusers = await user.find();
    res.status(200).json({
      status: "success",
      allusers,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const createuser = async (req, res, next) => {
  try {
    const newuser = await user.create(req.body);
    res.status(201).json({
      status: "success",
      newuser,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getuserbyid = async (req, res, next) => {
  try {
    const userbyid = await user.findById(req.params.id);
    res.status(200).json({
      status: "success",
      getuserbyid,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateuser = async (req, res, next) => {
  try {
    const updateduser = await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      updateduser,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteuser = async (req, res, next) => {
  try {
    const deleteduser = await user.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      deleteduser,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports={getallusers,createuser,getuserbyid,updateuser,deleteuser};