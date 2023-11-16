import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAbout = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSkill = async (skillData) => {
  try {
    const response = await axios.post(`${API_URL}/skills`, skillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAbout = async (aboutData) => {
  try {
    const response = await axios.put(`${API_URL}/about`, aboutData);
    return response.data;
  } catch (error) {
    throw error;
  }
};