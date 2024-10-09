import styled from 'styled-components';


export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;


export const TeacherContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ClassDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px;
  }
`;

export const StudentListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 1rem;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 6px;
      font-size: 0.9rem;
    }
  }
`;

export const AssessmentForm = styled.div`
  margin-top: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  textarea {
    height: 120px;
  }

  @media (max-width: 768px) {
    input, select, textarea {
      padding: 10px;
      font-size: 1rem;
    }

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    input, select, textarea {
      padding: 14px;
      font-size: 1.2rem;
    }

    label {
      font-size: 0.8rem;
    }

    textarea {
      height: 140px;
    }
  }
`;

export const RubricForm = styled.div`
  margin-top: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  textarea {
    height: 120px;
  }

  @media (max-width: 768px) {
    input, select, textarea {
      padding: 10px;
      font-size: 1rem;
    }

    label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    input, select, textarea {
      padding: 14px;
      font-size: 1.2rem;
    }

    label {
      font-size: 0.8rem;
    }

    textarea {
      height: 140px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1.1rem;
  }
`;

export const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0b7dda;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 1rem;
  }
`;

export const Spacer = styled.div`
  height: 40px;
`;

export const AssessmentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 1rem;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 6px;
      font-size: 0.9rem;
    }
  }
`;

export const StudentDetailsSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 10px;
    font-size: 1rem;

    strong {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

