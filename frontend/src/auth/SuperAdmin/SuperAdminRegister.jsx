import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
  EyeIcon,
} from '../../styles/RegisterStyles';

import bg1 from '../../assets/bg1.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://zawadi-project.onrender.com/api/users/register-super-admin', {
        username,
        email,
        password,
      });
      toast.success('Registered successfully!');
      console.log(response.data);
    } catch (error) {
      toast.error('Failed to register. Please try again.');
      console.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
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
        style={{ fontSize: '14px' }} // Adjust size for small devices
      />
      <RegisterBox>
        <Logo src={bg1} alt="Your logo" />
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email address" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ position: 'relative' }}>
            <Input
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
          <Button type="submit" loading={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </Form>
        <StyledLink to="/login">Already have an account? Login</StyledLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;
