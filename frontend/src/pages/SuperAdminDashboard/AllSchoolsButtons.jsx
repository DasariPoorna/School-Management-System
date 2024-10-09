import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavButton = styled(Link)`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const AllSchoolsButtons = () => {
  return (
    <ButtonContainer>
      <NavButton to="/super-admin/schools/add-school">Add School</NavButton>
      <NavButton to="/super-admin/schools/all-schools">All Schools</NavButton>
    </ButtonContainer>
  );
};

export default AllSchoolsButtons;
