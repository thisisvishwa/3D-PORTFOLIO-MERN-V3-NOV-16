const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  experience: [{
    company: String,
    position: String,
    dateRange: String,
    description: String,
    technologies: [String]
  }],
  education: [{
    school: String,
    degree: String,
    dateRange: String
  }],
  contact: {
    email: String,
    phone: String,
    socialLinks: [String],
    resumeLink: String
  }
});

module.exports = mongoose.model('About', AboutSchema);