import styled from 'styled-components';



export const CurriculumDetails = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionalText = styled.p`
  font-style: italic;
  color: gray;
`;



export const CurriculumContainer = styled.div`
  display: flex;
  transition: margin-left 0.3s;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '60px')}; 
  width: 100%;
  @media (max-width: 768px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '200px' : '0')};
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  transition: padding-left 0.3s;
  padding-left: ${({ sidebarOpen }) => (sidebarOpen ? '20px' : '10px')};
  @media (max-width: 768px) {
    padding-left: 10px; 
  }
`;

export const CurriculumHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CurriculumButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CurriculumContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AddCurriculumForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AddCurriculumInput = styled.input`
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const AddCurriculumButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export const Select = styled.select`
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const SubTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddSubTopicButton = styled.button`
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #117a8b;
  }
`;

export const CurriculumList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CurriculumItem = styled.li`
  background-color: #f8f9fa;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurriculumText = styled.span`
  font-size: 16px;
`;

export const CurriculumActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const SectionHeader = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #555;
  text-align: left;
`;
