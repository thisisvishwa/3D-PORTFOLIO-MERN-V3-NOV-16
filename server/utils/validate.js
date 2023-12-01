const yup = require('yup');

const projectSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  tags: yup.array().of(yup.string().required()).required(),
  liveSiteUrl: yup.string().url().required(),
  githubUrl: yup.string().url().required(),
  images: yup.array().of(yup.string().url().required()).required(),
  videos: yup.array().of(yup.string().url().required()).required(),
});

const skillSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  proficiency: yup.number().min(0).max(100).required(),
});

const aboutSchema = yup.object().shape({
  name: yup.string().required(),
  title: yup.string().required(),
  avatar: yup.string().url().required(),
  biography: yup.string().required(),
  skills: yup.array().of(yup.string().required()).required(),
  interests: yup.array().of(yup.string().required()).required(),
  experience: yup.array().of(
    yup.object().shape({
      company: yup.string().required(),
      position: yup.string().required(),
      dateRange: yup.string().required(),
      description: yup.string().required(),
      technologies: yup.array().of(yup.string().required()).required(),
    })
  ).required(),
  education: yup.array().of(
    yup.object().shape({
      school: yup.string().required(),
      degree: yup.string().required(),
      dateRange: yup.string().required(),
    })
  ).required(),
  contact: yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    socialMedia: yup.array().of(yup.string().url().required()).required(),
    resume: yup.string().url().required(),
  }).required(),
});

const validateProject = (project) => projectSchema.validate(project);
const validateSkill = (skill) => skillSchema.validate(skill);
const validateAbout = (about) => aboutSchema.validate(about);

module.exports = {
  validateProject,
  validateSkill,
  validateAbout,
};