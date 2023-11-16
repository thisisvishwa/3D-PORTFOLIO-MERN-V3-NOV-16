import { useState, useEffect } from 'react';
import axios from 'axios';

const useSkill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills');
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};

export default useSkill;