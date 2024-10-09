import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormContainer,
  FormTitle,
  FieldContainer,
  Label,
  Select,
  Button,
  Input,
  AddChildButton,
  ChildContainer,
  RemoveChildButton,
  ResponsiveContainer,
} from '../../styles/FormStyles.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOCAL_STORAGE_KEY = {
  SCHOOLS: 'schools_data',
  STUDENTS: 'students_data',
};

const DATA_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes

const ParentForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    school_id: '',
  });

  const [children, setChildren] = useState([{ student_id: '' }]);
  const [message, setMessage] = useState('');
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);

  // Function to get the token from local storage
  const getAuthToken = () => localStorage.getItem('token');

  // Utility function to get data from local storage
  const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
      const parsedData = JSON.parse(data);
      const currentTime = new Date().getTime();
      if (currentTime - parsedData.timestamp < DATA_EXPIRATION_TIME) {
        return parsedData.data;
      }
    }
    return null;
  };

  // Utility function to set data to local storage
  const setToLocalStorage = (key, data) => {
    const timestampedData = {
      data,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem(key, JSON.stringify(timestampedData));
  };

  useEffect(() => {
    const fetchSchools = async () => {
      const cachedSchools = getFromLocalStorage(LOCAL_STORAGE_KEY.SCHOOLS);
      if (cachedSchools) {
        setSchools(cachedSchools);
        return;
      }

      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/schools');
        setSchools(response.data);
        setToLocalStorage(LOCAL_STORAGE_KEY.SCHOOLS, response.data);
        toast.success('Schools fetched successfully!');
      } catch (error) {
        console.error('Error fetching schools:', error);
        toast.error('Failed to fetch schools.');
      }
    };

    const fetchStudents = async () => {
      const cachedStudents = getFromLocalStorage(LOCAL_STORAGE_KEY.STUDENTS);
      if (cachedStudents) {
        setStudents(cachedStudents);
        return;
      }

      try {
        const token = getAuthToken();
        const response = await axios.get('https://zawadi-project.onrender.com/api/students', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setStudents(response.data);
        setToLocalStorage(LOCAL_STORAGE_KEY.STUDENTS, response.data);
        toast.success('Students fetched successfully!');
      } catch (error) {
        console.error('Error fetching students:', error);
        toast.error('Failed to fetch students.');
      }
    };

    fetchSchools();
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChildChange = (index, e) => {
    const newChildren = [...children];
    newChildren[index].student_id = e.target.value;
    setChildren(newChildren);
  };

  const handleAddChild = () => {
    setChildren([...children, { student_id: '' }]);
  };

  const handleRemoveChild = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://zawadi-project.onrender.com/api/users/create-parent', {
        ...formData,
        children,
      });
      setMessage(response.data.message);
      toast.success('Parent created successfully!');
      // Optionally refresh data after successful POST
      await fetchSchools();
      await fetchStudents();
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || error.message));
      toast.error('Parent creation failed.');
    }
  };

  return (
    <ResponsiveContainer>
      <ToastContainer />
      <FormContainer>
        <FormTitle>Create Parent</FormTitle>
        <form onSubmit={handleSubmit}>
          <FieldContainer>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="school_id">School</Label>
            <Select id="school_id" name="school_id" value={formData.school_id} onChange={handleChange}>
              <option value="">Select School</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </Select>
          </FieldContainer>
          <FieldContainer>
            <Label>Children</Label>
            {children.map((child, index) => (
              <ChildContainer key={index}>
                <Select
                  id={`child_${index}`}
                  name={`child_${index}`}
                  value={child.student_id}
                  onChange={(e) => handleChildChange(index, e)}
                >
                  <option value="">Select Child</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))}
                </Select>
                {children.length > 1 && (
                  <RemoveChildButton
                    type="button"
                    onClick={() => handleRemoveChild(index)}
                  >
                    Remove
                  </RemoveChildButton>
                )}
              </ChildContainer>
            ))}
            <AddChildButton type="button" onClick={handleAddChild}>
              + Add Child
            </AddChildButton>
          </FieldContainer>
          <Button type="submit">Submit</Button>
          {message && <p>{message}</p>}
        </form>
      </FormContainer>
    </ResponsiveContainer>
  );
};

export default ParentForm;
