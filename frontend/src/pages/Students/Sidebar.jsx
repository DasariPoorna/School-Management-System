import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, 
  BsChatDots, BsGear } from 'react-icons/bs';
import { SidebarContainer, SidebarHeader, Logo, 
  SidebarNav, SidebarNavItem, StyledLink, SidebarIcon, 
  ToggleButton, ToggleIcon, Spacer } 
  from '../../styles/StudentSidebarStyles';
import bg1 from '../../assets/bg1.png';
import { FaTachometerAlt, FaTasks, FaCommentAlt, FaClipboard, FaBook, FaCalendarAlt, FaUserFriends, FaBullhorn, FaCog } from 'react-icons/fa';

const StudentSidebar = ({ onToggle = () => {} }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const location = useLocation();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(prev => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      onToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <>
    <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
      <SidebarHeader>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
        </ToggleButton>
        <Logo src={bg1} alt="Logo" isOpen={isOpen} />
      </SidebarHeader>

      <SidebarNav>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/dashboard'} isOpen={isOpen}><FaTachometerAlt /></SidebarIcon>
  <StyledLink to="/student/dashboard" isOpen={isOpen} selected={location.pathname === '/student/dashboard'}>Dashboard</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/assignments'} isOpen={isOpen}><FaTasks /></SidebarIcon>
  <StyledLink to="/student/assignments" isOpen={isOpen} selected={location.pathname === '/student/assignments'}>Assignments</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/feedback'} isOpen={isOpen}><FaCommentAlt /></SidebarIcon>
  <StyledLink to="/student/feedback" isOpen={isOpen} selected={location.pathname === '/student/feedback'}>Feedback</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/grades'} isOpen={isOpen}><FaClipboard /></SidebarIcon>
  <StyledLink to="/student/grades" isOpen={isOpen} selected={location.pathname === '/student/grades'}>Grades</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/student-grades'} isOpen={isOpen}><FaClipboard /></SidebarIcon>
  <StyledLink to="/student/student-grades" isOpen={isOpen} selected={location.pathname === '/student/student-grades'}>Student Marks</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/learning-materials'} isOpen={isOpen}><FaBook /></SidebarIcon>
  <StyledLink to="/student/learning-materials" isOpen={isOpen} selected={location.pathname === '/student/learning-materials'}>Learning Materials</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/attendance'} isOpen={isOpen}><FaCalendarAlt /></SidebarIcon>
  <StyledLink to="/student/attendance" isOpen={isOpen} selected={location.pathname === '/student/attendance'}>Attendance</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/communication'} isOpen={isOpen}><FaBullhorn /></SidebarIcon>
  <StyledLink to="/student/communication" isOpen={isOpen} selected={location.pathname === '/student/communication'}>Announcements</StyledLink>
</SidebarNavItem>
<SidebarNavItem>
  <SidebarIcon selected={location.pathname === '/student/settings'} isOpen={isOpen}><FaCog /></SidebarIcon>
  <StyledLink to="/student/settings" isOpen={isOpen} selected={location.pathname === '/student/settings'}>Profile</StyledLink>
</SidebarNavItem>
<Spacer />
</SidebarNav>
    </SidebarContainer>
  </>
  );
};

export default StudentSidebar;







// <SidebarNav>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/dashboard'} isOpen={isOpen}><FaTachometerAlt /></SidebarIcon>
//   <StyledLink to="/student/dashboard" isOpen={isOpen} selected={location.pathname === '/student/dashboard'}>Dashboard</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/assignments'} isOpen={isOpen}><FaTasks /></SidebarIcon>
//   <StyledLink to="/student/assignments" isOpen={isOpen} selected={location.pathname === '/student/assignments'}>Assignments</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/feedback'} isOpen={isOpen}><FaCommentAlt /></SidebarIcon>
//   <StyledLink to="/student/feedback" isOpen={isOpen} selected={location.pathname === '/student/feedback'}>Feedback</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/grades'} isOpen={isOpen}><FaClipboard /></SidebarIcon>
//   <StyledLink to="/student/grades" isOpen={isOpen} selected={location.pathname === '/student/grades'}>Grades</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/learning-materials'} isOpen={isOpen}><FaBook /></SidebarIcon>
//   <StyledLink to="/student/learning-materials" isOpen={isOpen} selected={location.pathname === '/student/learning-materials'}>Learning Materials</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/attendance'} isOpen={isOpen}><FaCalendarAlt /></SidebarIcon>
//   <StyledLink to="/student/attendance" isOpen={isOpen} selected={location.pathname === '/student/attendance'}>Attendance</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/communication'} isOpen={isOpen}><FaBullhorn /></SidebarIcon>
//   <StyledLink to="/student/communication" isOpen={isOpen} selected={location.pathname === '/student/communication'}>Announcements</StyledLink>
// </SidebarNavItem>
// <SidebarNavItem>
//   <SidebarIcon selected={location.pathname === '/student/settings'} isOpen={isOpen}><FaCog /></SidebarIcon>
//   <StyledLink to="/student/settings" isOpen={isOpen} selected={location.pathname === '/student/settings'}>Profile</StyledLink>
// </SidebarNavItem>
// </SidebarNav>