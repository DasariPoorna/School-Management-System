import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsPeople, BsPerson, BsGear, BsBook } from 'react-icons/bs';
import { FaUserPlus, FaUserTie, FaBookOpen, FaBullhorn } from 'react-icons/fa';
import { MdSettings, MdNotifications } from 'react-icons/md';

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

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SubMenuItem = styled.li`
  padding: 10px 20px;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const AdminSidebar = ({ onToggle }) => {
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
            <SidebarIcon selected={location.pathname === '/admin/dashboard'}>
              <BsGraphUp />
            </SidebarIcon>
            <StyledLink to="/admin/dashboard" isOpen={isOpen} selected={location.pathname === '/admin/dashboard'}>
              Dashboard
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/classes'}>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/admin/classes" isOpen={isOpen} selected={location.pathname === '/admin/classes'}>
              Add Classes
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/students'}>
              <FaUserPlus />
            </SidebarIcon>
            <StyledLink to="/admin/students" isOpen={isOpen} selected={location.pathname === '/admin/students'}>
              Add Students
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/teachers'}>
              <FaUserTie />
            </SidebarIcon>
            <StyledLink to="/admin/teachers" isOpen={isOpen} selected={location.pathname === '/admin/teachers'}>
              Add Teachers
            </StyledLink>
          </SidebarNavItem>
          
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/teachers-attendance'}>
              <FaBookOpen />
            </SidebarIcon>
            <StyledLink to="/admin/teacher-attendance" isOpen={isOpen} selected={location.pathname === '/admin/teachers-attendance'}>
              Teacher's Attendence Time
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/curriculum-management'}>
              <FaBookOpen />
            </SidebarIcon>
            <StyledLink to="/admin/curriculum-management" isOpen={isOpen} selected={location.pathname === '/admin/curriculum-management'}>
              Curriculum Management
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/communication'}>
              <FaBullhorn />
            </SidebarIcon>
            <StyledLink to="/admin/communication" isOpen={isOpen} selected={location.pathname === '/admin/communication'}>
              Notifications
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/settings'}>
              <MdSettings />
            </SidebarIcon>
            <StyledLink to="/admin/settings" isOpen={isOpen} selected={location.pathname === '/admin/settings'}>
              Settings
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;






//   return (
//     <>
//       <MobileToggleButton onClick={toggleMobileSidebar}>
//         <ToggleIcon isOpen={isMobileOpen}>≡</ToggleIcon>
//       </MobileToggleButton>
//       {isMobileOpen && <Overlay onClick={toggleMobileSidebar} />}
//       <SidebarContainer ref={sidebarRef} isOpen={isOpen || isMobileOpen}>
//         <SidebarHeader>
//           <ToggleButton onClick={toggleSidebar}>
//             <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
//           </ToggleButton>
//           <Logo src={bg1} alt="Logo" isOpen={isOpen || isMobileOpen} />
//         </SidebarHeader>
//         <SidebarNav>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/dashboard">
//               <SidebarIcon selected={location.pathname === '/admin/dashboard'}>
//                 <BsGraphUp />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/dashboard" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/dashboard'}>
//               Dashboard
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/classes">
//               <SidebarIcon selected={location.pathname === '/admin/classes'}>
//                 <BsPeople />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/classes" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/classes'}>
//               Classes
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/students">
//               <SidebarIcon selected={location.pathname === '/admin/students'}>
//                 <BsPeople />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/students" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/students'}>
//               Students
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/teachers">
//               <SidebarIcon selected={location.pathname === '/admin/teachers'}>
//                 <BsPerson />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/teachers" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/teachers'}>
//               Teachers
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/reports">
//               <SidebarIcon selected={location.pathname === '/admin/reports'}>
//                 <BsFileText />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/reports" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/reports'}>
//               Reports
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/curriculum-management">
//               <SidebarIcon selected={location.pathname === '/admin/curriculum-management'}>
//                 <BsBook />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/curriculum-management" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/curriculum-management'}>
//               Curriculum Management
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/analytics">
//               <SidebarIcon selected={location.pathname === '/admin/analytics'}>
//                 <BsGraphUp />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/analytics" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/analytics'}>
//               Analytics
//             </StyledLink>
//           </SidebarNavItem>
//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/messages">
//               <SidebarIcon selected={location.pathname === '/admin/messages'}>
//                 <BsChatDots />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/messages" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/messages'}>
//               Messages
//             </StyledLink>
//           </SidebarNavItem>

//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/teachers-performance">
//               <SidebarIcon selected={location.pathname === '/admin/teachers-performance'}>
//                 <BsGear />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/teachers-performance" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/teachers-performance'}>
//               Teaacher's Performance
//             </StyledLink>
//           </SidebarNavItem>

//           <SidebarNavItem onClick={handleNavItemClick}>
//             <Link to="/admin/settings">
//               <SidebarIcon selected={location.pathname === '/admin/settings'}>
//                 <BsGear />
//               </SidebarIcon>
//             </Link>
//             <StyledLink to="/admin/settings" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/settings'}>
//               Settings
//             </StyledLink>
//           </SidebarNavItem>
//         </SidebarNav>
//       </SidebarContainer>
//     </>
//   );
// };

// export default AdminSidebar;
