import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Import edit and delete icons from react-icons

export const ClassesContainer = styled.div`
  display: flex;
  padding: 40px 20px;
  background-color: #f7f9fc;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  transition: margin-left 0.3s;
  margin-left: ${({ isSidebarExpanded }) => (isSidebarExpanded ? '250px' : '0')};
`;

export const ClassesContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ClassItem = styled.li`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddClassForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AddClassInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const AddClassButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const ClassContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  width: ${({ isSidebarExpanded }) => (isSidebarExpanded ? '250px' : '0')};
  overflow: hidden;
  transition: width 0.3s;
`;

export const ClassHeader = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #4caf50;
  margin-right: 10px;
`;

export const GradeHeader = styled.h2`
  font-size: 16px;
  color: #999;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CategorySection = styled.div`
  margin-bottom: 20px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
`;

export const CategoryItem = styled.li`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#4caf50' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 5px;
  cursor: pointer;
`;

export const CategoryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const EditIcon = styled(AiFillEdit)`
  color: #4caf50;
  margin-left: 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled(AiFillDelete)`
  color: #f44336;
  margin-left: 10px;
  cursor: pointer;
`;
