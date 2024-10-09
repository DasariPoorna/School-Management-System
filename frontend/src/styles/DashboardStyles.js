// styles/DashboardStyles.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  background-color: #f7f8fc;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 150px;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  width: 100%;
`;

export const NavLink = styled.div`
  width: 100%;
  padding: 15px;
  text-align: left;
  color: ${(props) => (props.active ? '#1d72b8' : '#000000')};
  background-color: ${(props) => (props.active ? '#e6f4ff' : '#ffffff')};
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  width: calc(100% - 250px);
  position: fixed;
  top: 0;
  left: 250px;
  z-index: 1000;
`;

export const SearchBar = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

export const DashboardContent = styled.div`
  background-color: #f7f8fc;
  padding: 20px;
  margin-left: 250px;
  padding-top: 80px;
  min-height: 100vh;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
  margin-left: 250px;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
  margin-left: 250px;
`;

// export const AdminDashboardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background-color: #f8f9fa;
// `;

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;





export const PerformanceSection = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


// Additional styles for the AddTeacherForm


export const TeacherCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const TeacherInfo = styled.div`
  margin-left: 16px;
`;

export const TeacherName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const TeacherSubject = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

export const EditIcon = styled.div`
  color: #3498db;
  cursor: pointer;
`;

export const DeleteIcon = styled.div`
  color: #e74c3c;
  cursor: pointer;
`;

export const TeachersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TeachersHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;




export const AddTeacherForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;  // Increase the gap for larger spacing
  margin-bottom: 30px;
`;

export const AddTeacherInput = styled.input`
  padding: 15px;  // Increase padding for larger inputs
  font-size: 16px;  // Increase font size for readability
  border: 1px solid #ddd;
  border-radius: 8px;  // Slightly rounder corners
  width: 100%;  // Ensure it takes full width of container

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;  // Adjust size for tablet devices
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;  // Adjust size for mobile devices
  }
`;

export const AddTeacherButton = styled.button`
  padding: 15px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;  // Adjust button size for tablet devices
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;  // Adjust button size for mobile devices
  }
`;

export const TeachersContainer = styled.div`
  padding: 30px;  // Increase padding for larger spacing
  background-color: #f9f9f9;
`;

export const TeacherDetails = styled.div`
  margin-top: 30px;
  background: #fff;
  padding: 25px;  // Increase padding for better spacing
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;








export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${({ sidebarWidth }) => sidebarWidth || '0px'};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const HalfWidthSection = styled(Section)`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContent = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CalendarSection = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const CalendarTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CalendarDay = styled.div`
  padding: 10px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const TeacherTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TeacherTh = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const TeacherTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  height: 300px;

  @media (max-width: 576px) {
    height: 200px;
  }
`;
