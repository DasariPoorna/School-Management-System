import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  Title,
  Subtitle,
  Input,
  TextArea,
  ButtonContainer,
  Button,
} from '../../styles/DemoForm.js';

const DemoForm = () => {
  const [demos, setDemos] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    message: '',
  });

  useEffect(() => {
    // Check if demos are already stored in local storage
    const storedDemos = localStorage.getItem('demos');
    if (storedDemos) {
      setDemos(JSON.parse(storedDemos));
    } else {
      fetchDemos();
    }
  }, []);

  const fetchDemos = async () => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/request-demo');
      setDemos(response.data.demos);
      localStorage.setItem('demos', JSON.stringify(response.data.demos)); // Store demos in local storage
    } catch (error) {
      console.error('Error fetching demos');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://zawadi-project.onrender.com/api/request-demo', formData);
      toast.success('Demo request submitted successfully!');
      fetchDemos(); // Fetch and update local storage after submission
      setFormData({ name: '', email: '', phone: '', schoolName: '', message: '' }); // Reset form
    } catch (error) {
      toast.error('Error submitting demo request');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://zawadi-project.onrender.com/api/request-demo/${id}`);
      toast.success('Demo request deleted successfully!');
      fetchDemos(); // Fetch and update local storage after deletion
    } catch (error) {
      toast.error('Error deleting demo request');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Request a Demo</Title>
        <Subtitle>Interested in seeing Zawadii in action? Request a demo now!</Subtitle>
        <Input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <Input name="schoolName" type="text" placeholder="School Name" value={formData.schoolName} onChange={handleChange} />
        <TextArea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} />
        <ButtonContainer>
          <Button type="submit">SUBMIT REQUEST</Button>
        </ButtonContainer>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

export default DemoForm;
