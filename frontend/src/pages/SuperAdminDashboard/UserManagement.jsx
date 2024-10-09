import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const SchoolManagementContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9; /* Light background color */
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SchoolList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SchoolItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

const SchoolInfo = styled.div`
  margin-bottom: 10px;
  color: #555;

  strong {
    color: #333;
  }
`;

const SchoolActions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const AddButton = styled(Button)`
  margin-top: 20px;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const SchoolManagement = () => {
  // Sample school data
  const [schools, setSchools] = useState([
    { id: 1, name: 'Example School', address: '123 Main St, City' },
    { id: 2, name: 'Another School', address: '456 Elm St, Town' },
    { id: 3, name: 'New School', address: '789 Oak St, Village' },
  ]);

  return (
    <SchoolManagementContainer>
      <Heading>School Management</Heading>
      <SchoolList>
        {schools.map((school) => (
          <SchoolItem key={school.id}>
            <SchoolInfo>
              <strong>Name:</strong> {school.name}<br />
              <strong>Address:</strong> {school.address}
            </SchoolInfo>
            <SchoolActions>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </SchoolActions>
          </SchoolItem>
        ))}
      </SchoolList>
      <AddButton>Add New School</AddButton>
    </SchoolManagementContainer>
  );
};

export default SchoolManagement;
