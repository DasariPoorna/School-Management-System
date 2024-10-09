import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FeedbackContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const FeedbackItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
    font-size: 1.2em;

    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
  }

  p {
    color: #555;
    font-size: 1em;

    @media screen and (max-width: 768px) {
      font-size: 0.9em;
    }
  }
`;

const SidebarContainer = styled.div`
  flex: 0 0 240px;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  const studentId = localStorage.getItem('student_id'); // Assuming student ID is stored in localStorage

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedbacks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            student_id: studentId,
          },
        });
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Failed to fetch feedbacks', error);
      }
    };

    fetchFeedbacks();
  }, [token, studentId]);

  return (
    <FeedbackContainer>
      <Content>
        <h2>Feedback</h2>
        {feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.feedback_id}>
            <h3>{feedback.title}</h3>
            <p>{feedback.content}</p>
          </FeedbackItem>
        ))}
      </Content>
    </FeedbackContainer>
  );
}

export default Feedback;
