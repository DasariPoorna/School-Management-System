import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled components
const CommunicationContainer = styled.div`
  padding: 20px;
`;

const CommunicationItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const CommunicationTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const CommunicationContent = styled.p`
  color: #666;
`;

const Communication = ({ schoolId }) => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    fetchCommunications();
  }, []);

  const fetchCommunications = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/announcements?school_id=${schoolId}`);
      setCommunications(response.data);
    } catch (error) {
      console.error('Error fetching communications:', error);
      toast.error('Failed to fetch communications');
    }
  };

  return (
    <CommunicationContainer>
      <ToastContainer />
      <h2>Communications</h2>
      {communications.map((communication) => (
        <CommunicationItem key={communication.id}>
          <CommunicationTitle>{communication.title}</CommunicationTitle>
          <CommunicationContent>{communication.content}</CommunicationContent>
        </CommunicationItem>
      ))}
    </CommunicationContainer>
  );
};

export default Communication;
