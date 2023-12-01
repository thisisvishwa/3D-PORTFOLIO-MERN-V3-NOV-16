const express = require('express');
const About = require('../models/About');
const errorHandler = require('../utils/errorHandler');

// Get About Info
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.status(200).json(about);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Update About Info
exports.updateAbout = async (req, res) => {
  try {
    const updatedAbout = await About.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedAbout);
  } catch (err) {
    errorHandler(res, err);
  }
};

// Upload Avatar
exports.uploadAvatar = async (req, res) => {
  try {
    const about = await About.findOne();
    about.avatar = req.file.path;
    await about.save();
    res.status(200).json({
      success: true,
      data: about.avatar,
    });
  } catch (err) {
    errorHandler(res, err);
  }
};