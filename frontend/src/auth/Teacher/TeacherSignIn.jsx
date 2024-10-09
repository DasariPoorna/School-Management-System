import React, { useState } from 'react';
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
  EyeIcon
} from '../../styles/TeacherSignInStyles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const TeacherSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://zawadi-project.onrender.com/api/users/login', { email, password });
      if (response.status === 200) {
        // Store the token and role in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        // Redirect to teacher dashboard
        navigate('/teacher/dashboard');
        toast.success('Logged in successfully!');
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
        toast.error('Failed to sign in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TeacherSignInContainer>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ fontSize: '14px' }}
      />
      <h2>Teacher Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{position: 'relative'}}> 
        <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>

        </div>
        <SubmitButton onClick={handleSignIn} loading={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
          </SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
