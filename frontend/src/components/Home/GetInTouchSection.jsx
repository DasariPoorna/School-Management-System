import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SectionContainer,
  FormContainer,
  Title,
  Subtitle,
  InputGroup,
  Input,
  FullWidthInput,
  TextArea,
  Button,
  ContactInfo,
  ContactTitle,
  ContactDetails,
} from '../../styles/GetInTouchStyles.js';
import { FaPhone, FaEnvelope, FaGlobe, FaTrash } from 'react-icons/fa';

const GetInTouchSection = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/get-in-touch');
      setContacts(response.data.contacts);
      localStorage.setItem('contacts', JSON.stringify(response.data.contacts));
    } catch (error) {
      console.error('Error fetching contacts');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://zawadi-project.onrender.com/api/get-in-touch/${id}`);
      toast.success('Contact deleted successfully!');
      fetchContacts(); // Refresh the list after deletion
    } catch (error) {
      toast.error('Error deleting contact');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());

    try {
      await axios.post('https://zawadi-project.onrender.com/api/get-in-touch', contactData);
      toast.success('Message sent successfully!');
      fetchContacts(); // Refresh the list after adding a new contact
    } catch (error) {
      toast.error('Error submitting form');
    }
  };

  return (
    <SectionContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Get In Touch</Title>
        <Subtitle>We love to hear from you.</Subtitle>
        <InputGroup>
          <Input name="firstName" type="text" placeholder="First name" required />
          <Input name="lastName" type="text" placeholder="Last name" required />
        </InputGroup>
        <FullWidthInput name="email" type="email" placeholder="Email address" required />
        <TextArea name="message" placeholder="Message" rows="4" required />
        <Button type="submit">SEND MESSAGE</Button>
      </FormContainer>
      <ContactInfo>
        <ContactTitle>Contact Info</ContactTitle>
        <ContactDetails>
          <p>Nairobi, Kenya</p>
          <p><FaPhone /> 0794 203 261</p>
          <p><FaEnvelope /> hello@zawadii.org</p>
          <p><FaGlobe /> https://zawadii.tech</p>
        </ContactDetails>
      </ContactInfo>
      <ToastContainer />
    </SectionContainer>
  );
};

export default GetInTouchSection;
