import React, { useState } from 'react';
import StudentSidebar from '../pages/Students/Sidebar.jsx';
import StudentDashboard from '../pages/Students/Dashboard.jsx';
import { LayoutContainer, ContentContainer } from '../styles/LayoutStyles.js';

const StudentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (open) => {
    setIsSidebarOpen(open);
  };

  return (
    <LayoutContainer>
      <StudentSidebar onToggle={handleSidebarToggle} />
      <ContentContainer isOpen={isSidebarOpen}>
        <StudentDashboard />
      </ContentContainer>
    </LayoutContainer>
  );
};


export default StudentLayout;
