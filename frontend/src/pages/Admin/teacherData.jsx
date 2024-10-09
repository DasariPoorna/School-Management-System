// components/teacherData.js
import axios from 'axios';

export const fetchTeacherData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/teachers');
    return response.data.teachers || [];
  } catch (error) {
    console.error('Error fetching teacher data:', error);
    return [];
  }
};
