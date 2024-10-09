import styled from 'styled-components';

export const StudentContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const SubjectDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const AssessmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }
`;

export const FeedbackSection = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h3 {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
