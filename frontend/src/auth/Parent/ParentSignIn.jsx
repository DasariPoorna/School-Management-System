import React, { useState } from 'react';
import {
  ParentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../../styles/ParentSignInStyle';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ParentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://Zawadi-Project.onrender.com/api/users/login', { email, password });
      if (response.status === 200) {
        // Store the token and role in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        // Sign-in successful, redirect to parent dashboard
        navigate('/student/dashboard');
        toast.success('Logged in successfully!');
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
        toast.error('Failed to sign in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <ParentSignInContainer>
      <ToastContainer />
      <h2>Parent Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </ParentSignInContainer>
  );
};

export default ParentSignIn;
