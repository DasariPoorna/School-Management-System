import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsGear, BsCalendar } from 'react-icons/bs';
import { FaBookOpen, FaClipboardList, FaBullhorn, FaUserCheck, FaTasks } from 'react-icons/fa';
import { MdOutlineAssessment } from 'react-icons/md';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  height: 100%;
  background-color: #ffffff;
  color: #000;
  overflow-y: auto;
  padding-bottom: 500px; /* Add space at the bottom */
  transition: width 0.3s ease;
  z-index: 100;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '60px')};
  }

  @media (max-width: 480px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: ${({ isOpen }) => (isOpen ? '180px' : '0')};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  height: auto;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ToggleIcon = styled.span`
  color: #000;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #000;
  font-size: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media (min-width: 769px) {
    display: none;
  }
`;

const TeacherSidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Logo src={bg1} alt="Logo" isOpen={isOpen} />
        </SidebarHeader>
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/dashboard'}>
              <BsGraphUp />
            </SidebarIcon>
            <StyledLink to="/teacher/dashboard" isOpen={isOpen} selected={location.pathname === '/teacher/dashboard'}>
              Dashboard
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/lesson-plans'}>
              <FaBookOpen />
            </SidebarIcon>
            <StyledLink to="/teacher/lesson-plans" isOpen={isOpen} selected={location.pathname === '/teacher/lesson-plans'}>
              Lesson Plans
            </StyledLink>
          </SidebarNavItem>

            <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/reporting-time'}>
              <FaBookOpen />
            </SidebarIcon>
            <StyledLink to="/teacher/reporting-time" isOpen={isOpen} selected={location.pathname === '/teacher/reporting-time'}>
              Teacher Reporting Time
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/enter-assessments-marks'}>
              <MdOutlineAssessment />
            </SidebarIcon>
            <StyledLink to="/teacher/enter-assessments-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-assessments-marks'}>
              Enter Assessments Marks
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/attendance'}>
              <FaUserCheck />
            </SidebarIcon>
            <StyledLink to="/teacher/attendance" isOpen={isOpen} selected={location.pathname === '/teacher/attendance'}>
              Student Attendance
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/assessments'}>
              <FaClipboardList />
            </SidebarIcon>
            <StyledLink to="/teacher/assessments" isOpen={isOpen} selected={location.pathname === '/teacher/assessments'}>
              Assessments
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/announcement'}>
              <FaBullhorn />
            </SidebarIcon>
            <StyledLink to="/teacher/announcement" isOpen={isOpen} selected={location.pathname === '/teacher/announcement'}>
              Notifications
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/assignments'}>
              <FaTasks />
            </SidebarIcon>
            <StyledLink to="/teacher/assignments" isOpen={isOpen} selected={location.pathname === '/teacher/assignments'}>
              Assignments
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/calendar'}>
              <BsCalendar />
            </SidebarIcon>
            <StyledLink to="/teacher/calendar" isOpen={isOpen} selected={location.pathname === '/teacher/calendar'}>
              Calendar
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/settings'}>
              <BsGear />
            </SidebarIcon>
            <StyledLink to="/teacher/settings" isOpen={isOpen} selected={location.pathname === '/teacher/settings'}>
              Settings
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default TeacherSidebar;





//   return (
//     <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
//       <SidebarHeader>
//         <ToggleButton onClick={toggleSidebar}>
//           <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
//         </ToggleButton>
//         <Logo src={bg1} alt="Logo" isOpen={isOpen} />
//       </SidebarHeader>
//       <SidebarNav>
//         <SidebarNavItem>
//           <Link to="/teacher/dashboard">
//             <SidebarIcon selected={location.pathname === '/teacher/dashboard'}>
//               <FaChartBar />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/dashboard" isOpen={isOpen} selected={location.pathname === '/teacher/dashboard'}>
//             Dashboard
//           </StyledLink>
//         </SidebarNavItem>
//         <SidebarNavItem>
//           <Link to="/teacher/lesson-plans">
//             <SidebarIcon selected={location.pathname === '/teacher/lesson-plans'}>
//               <FaClipboardList />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/lesson-plans" isOpen={isOpen} selected={location.pathname === '/teacher/lesson-plans'}>
//             Lesson Plans
//           </StyledLink>
//         </SidebarNavItem>
//         <SidebarNavItem>
//           <Link to="/teacher/student-progress">
//             <SidebarIcon selected={location.pathname === '/teacher/student-progress'}>
//               <FaUserGraduate />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/student-progress" isOpen={isOpen} selected={location.pathname === '/teacher/student-progress'}>
//             Students Progress
//           </StyledLink>
//         </SidebarNavItem>
//         <SidebarNavItem>
//           <Link to="/teacher/assessments">
//             <SidebarIcon selected={location.pathname === '/teacher/assessments'}>
//               <FaClipboardList />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/assessments" isOpen={isOpen} selected={location.pathname === '/teacher/assessments'}>
//             Assessments
//           </StyledLink>
//         </SidebarNavItem>
//         <SidebarNavItem>
//           <Link to="/teacher/assignments">
//             <SidebarIcon selected={location.pathname === '/teacher/assignments'}>
//               <FaFileAlt />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/assignments" isOpen={isOpen} selected={location.pathname === '/teacher/assignments'}>
//             Assignments
//           </StyledLink>
//         </SidebarNavItem>
//         <SidebarNavItem>
//           <Link to="/teacher/view-curriculum">
//             <SidebarIcon selected={location.pathname === '/teacher/view-curriculum'}>
//               <FaBook />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/view-curriculum" isOpen={isOpen} selected={location.pathname === '/teacher/view-curriculum'}>
//             View Curriculum
//           </StyledLink>
//         </SidebarNavItem>

//         <SidebarNavItem>
//           <Link to="/teacher/current-view-curriculum">
//             <SidebarIcon selected={location.pathname === '/teacher/current-view-curriculum'}>
//               <FaBook />
//             </SidebarIcon>
//           </Link>
//           <StyledLink to="/teacher/current-view-curriculum" isOpen={isOpen} selected={location.pathname === '/teacher/current-view-curriculum'}>
//            Current View Curriculum
//           </StyledLink>
//         </SidebarNavItem>


//         <SidebarNavItem onClick={() => setIsAcademicRecordsOpen(!isAcademicRecordsOpen)}>
//           <SidebarIcon selected={isAcademicRecordsOpen}>
//             <FaChartLine />
//           </SidebarIcon>
//           <StyledLink to="#" isOpen={isOpen} selected={isAcademicRecordsOpen}>
//             Academic Records {isAcademicRecordsOpen ? <FaCaretUp /> : <FaCaretDown />}
//           </StyledLink>
//         </SidebarNavItem>
//         {isAcademicRecordsOpen && (
//           <>
//             <SubNavItem>
//               <Link to="/teacher/enter-marks">
//                 <SidebarIcon selected={location.pathname === '/teacher/enter-marks'}>
//                   <FaChartLine />
//                 </SidebarIcon>
//               </Link>
//               <StyledLink to="/teacher/enter-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-marks'}>
//                 Enter Marks
//               </StyledLink>
//             </SubNavItem>
//             <SubNavItem>
//               <Link to="/teacher/performance-analysis">
//                 <SidebarIcon selected={location.pathname === '/teacher/performance-analysis'}>
//                   <FaChartBar />
//                 </SidebarIcon>
//               </Link>
//               <StyledLink to="/teacher/performance-analysis" isOpen={isOpen} selected={location.pathname === '/teacher/performance-analysis'}>
//                 Performance Analysis
//               </StyledLink>
//             </SubNavItem>
//             <SubNavItem>
//               <Link to="/teacher/enter-assessments-marks">
//                 <SidebarIcon selected={location.pathname === '/teacher/enter-assessments-marks'}>
//                   <FaChartBar />
//                 </SidebarIcon>
//               </Link>
//               <StyledLink to="/teacher/enter-assessments-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-assessments-marks'}>
//                 Enter Assessment Marks
//               </StyledLink>
//             </SubNavItem>
//           </>
//           )}
//           <SidebarNavItem>
//             <Link to="/teacher/calendar">
//               <SidebarIcon selected={location.pathname === '/teacher/calendar'}>
//                 <FaCalendarAlt />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/teacher/calendar" isOpen={isOpen} selected={location.pathname === '/teacher/calendar'}>
//               Calendar
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem>
//             <Link to="/teacher/settings">
//               <SidebarIcon selected={location.pathname === '/teacher/settings'}>
//                 <FaCog />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/teacher/settings" isOpen={isOpen} selected={location.pathname === '/teacher/settings'}>
//               Settings
//             </StyledLink>
//           </SidebarNavItem>

//           <SidebarNavItem>
//             <Link to="/teacher/attendance">
//               <SidebarIcon selected={location.pathname === '/teacher/attendance'}>
//                 <FaCog />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/teacher/attendance" isOpen={isOpen} selected={location.pathname === '/teacher/attendance'}>
//               Mark Attendnce
//             </StyledLink>
//           </SidebarNavItem>

//           <SidebarNavItem>
//             <Link to="/teacher/announcement">
//               <SidebarIcon selected={location.pathname === '/teacher/announcement'}>
//                 <FaComments />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/teacher/announcement" isOpen={isOpen} selected={location.pathname === '/teacher/announcement'}>
//             Announcement
//             </StyledLink>
//           </SidebarNavItem>
//         </SidebarNav>
//         <Spacer />
//         <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
//           ×
//         </CloseButton>
//       </SidebarContainer>
    
//   );

//   function toggleAcademicRecords() {
//     setIsAcademicRecordsOpen(!isAcademicRecordsOpen);
//   }
// };

// export default TeacherSidebar;
