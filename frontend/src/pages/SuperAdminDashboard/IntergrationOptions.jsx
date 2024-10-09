import React from 'react';
import styled from 'styled-components';

// Styled components
const IntegrationContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const IntegrationTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5em;
    text-align: center;
  }
`;

const IntegrationOptionsList = styled.ul`
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const IntegrationOptionItem = styled.li`
  margin-bottom: 10px;
`;

const IntegrationOptionButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const IntegrationOptions = () => {
  const handleIntegrationOptionClick = (option) => {
    // Implement logic for each integration option
    console.log(`Integration option clicked: ${option}`);
  };

  return (
    <IntegrationContainer>
      <IntegrationTitle>Integration Options</IntegrationTitle>
      <IntegrationOptionsList>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Google Classroom')}>
            Integrate with Google Classroom
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Microsoft Teams')}>
            Integrate with Microsoft Teams
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Zoom')}>
            Integrate with Zoom
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        {/* Add more integration options as needed */}
      </IntegrationOptionsList>
    </IntegrationContainer>
  );
};

export default IntegrationOptions;
