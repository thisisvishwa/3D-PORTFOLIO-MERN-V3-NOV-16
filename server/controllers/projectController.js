const express = require('express');
const Project = require('../models/Project');
const asyncHandler = require('../utils/asyncHandler');
const errorHandler = require('../utils/errorHandler');

// Get all projects
exports.getProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({ success: true, data: projects });
});

// Get single project
exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new errorHandler(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: project });
});

// Create new project
exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
});

// Update project
exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!project) {
    return next(new errorHandler(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: project });
});

// Delete project
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(new errorHandler(`Project not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: {} });
});