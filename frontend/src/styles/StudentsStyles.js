import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StudentsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 5px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const StudentItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    margin-bottom: 8px;
  }
`;

export const StudentDetails = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AddStudentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AddStudentInput = styled.input`
  padding: 10px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;  /* Increased padding for small devices */
    font-size: 15px; /* Slightly increased font size for small devices */
    margin-bottom: 12px;
  }
`;

export const AddStudentButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px;  /* Increased padding for small devices */
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;  /* Increased padding for small devices */
    font-size: 15px; /* Slightly increased font size for small devices */
    margin-bottom: 12px;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }

  @media (max-width: 768px) {
    padding: 7px 10px;
  }

  @media (max-width: 480px) {
    padding: 9px 14px;  /* Increased padding for small devices */
  }
`;

export const UpdateButton = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    padding: 7px 10px;
  }

  @media (max-width: 480px) {
    padding: 9px 14px;  /* Increased padding for small devices */
  }
`;

export const IconWrapper = styled.span`
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 768px) {
    margin-left: 4px;
  }

  @media (max-width: 480px) {
    margin-left: 6px; /* Slightly increased margin for better spacing */
  }
`;



