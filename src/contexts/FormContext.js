import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    projectForm: {
      name: '',
      description: '',
      tags: [],
      liveSiteUrl: '',
      githubUrl: '',
      images: [],
      videos: [],
      models: [],
    },
    skillForm: {
      name: '',
      description: '',
      proficiency: '',
    },
    aboutForm: {
      name: '',
      title: '',
      avatar: '',
      biography: '',
      skills: [],
      interests: [],
      experience: [],
      education: [],
      contact: {
        email: '',
        phone: '',
        socialLinks: [],
      },
    },
  });

  const updateForm = (formName, updatedForm) => {
    setFormState(prevState => ({
      ...prevState,
      [formName]: updatedForm,
    }));
  };

  return (
    <FormContext.Provider value={{ formState, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};