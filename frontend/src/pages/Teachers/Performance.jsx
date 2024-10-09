import React, { useState } from 'react';
import styled from 'styled-components';
import PerformanceSection from './PerformanceSection';
import EnterMarksSection from './EnterMarks';

const PerformanceContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#6BD4E7' : '#ccc')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#4CAAB1' : '#bbb')};
  }
`;

const Performance = () => {
  const [showPerformanceData, setShowPerformanceData] = useState(true);
  const [showEnterMarks, setShowEnterMarks] = useState(false);

  const handleShowPerformanceData = () => {
    setShowPerformanceData(true);
    setShowEnterMarks(false);
  };

  const handleShowEnterMarks = () => {
    setShowEnterMarks(true);
    setShowPerformanceData(false);
  };

  return (
    <PerformanceContainer>
      <ButtonGroup>
        <Button active={showPerformanceData} onClick={handleShowPerformanceData}>
          Performance Data
        </Button>
        <Button active={showEnterMarks} onClick={handleShowEnterMarks}>
          Enter Marks
        </Button>
      </ButtonGroup>

      {showPerformanceData && <PerformanceSection />}
      {showEnterMarks && <EnterMarksSection />}
    </PerformanceContainer>
  );
};

export default Performance;
