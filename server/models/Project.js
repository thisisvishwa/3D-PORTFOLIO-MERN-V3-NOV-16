const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  videos: {
    type: [String],
    required: true,
  },
  models: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);