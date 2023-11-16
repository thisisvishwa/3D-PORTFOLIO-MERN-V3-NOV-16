const express = require('express');
const Skill = require('../models/Skill');
const asyncHandler = require('../utils/asyncHandler');
const errorHandler = require('../utils/errorHandler');

// Get all skills
exports.getSkills = asyncHandler(async (req, res, next) => {
  const skills = await Skill.find();
  res.status(200).json({ success: true, data: skills });
});

// Get single skill
exports.getSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return next(new errorHandler(`Skill not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: skill });
});

// Create new skill
exports.createSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.create(req.body);
  res.status(201).json({ success: true, data: skill });
});

// Update skill
exports.updateSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!skill) {
    return next(new errorHandler(`Skill not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: skill });
});

// Delete skill
exports.deleteSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.findByIdAndDelete(req.params.id);
  if (!skill) {
    return next(new errorHandler(`Skill not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: {} });
});