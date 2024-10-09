import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// // Styled components
// const CommunicationContainer = styled.div`
//   padding: 20px;
//   background-color: #f9f9f9;

//   @media screen and (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const CommunicationItem = styled.div`
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   padding: 10px;
//   border-radius: 5px;
//   background-color: #fff;

//   @media screen and (max-width: 768px) {
//     padding: 8px;
//     margin-bottom: 15px;
//   }
// `;

// const CommunicationTitle = styled.h3`
//   color: #333;
//   margin-bottom: 10px;
//   font-size: 1.5rem;

//   @media screen and (max-width: 768px) {
//     font-size: 1.2rem;
//     margin-bottom: 8px;
//   }
// `;

// const CommunicationContent = styled.p`
//   color: #666;
//   font-size: 1rem;

//   @media screen and (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

// const Header = styled.h2`
//   color: #333;
//   text-align: center;
//   margin-bottom: 20px;
//   font-size: 2rem;

//   @media screen and (max-width: 768px) {
//     font-size: 1.5rem;
//     margin-bottom: 15px;
//   }
// `;

// const Communication = ({ schoolId }) => {
//   const [communications, setCommunications] = useState([]);

//   useEffect(() => {
//     fetchCommunications();
//   }, []);

//   const fetchCommunications = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/announcements?school_id=${schoolId}`);
//       setCommunications(response.data);
//     } catch (error) {
//       console.error('Error fetching communications:', error);
//       toast.error('Failed to fetch communications');
//     }
//   };

//   return (
//     <CommunicationContainer>
//       <ToastContainer />
//       <Header>Communications</Header>
//       {communications.map((communication) => (
//         <CommunicationItem key={communication.id}>
//           <CommunicationTitle>{communication.title}</CommunicationTitle>
//           <CommunicationContent>{communication.content}</CommunicationContent>
//         </CommunicationItem>
//       ))}
//     </CommunicationContainer>
//   );
// };

export default Communication;
