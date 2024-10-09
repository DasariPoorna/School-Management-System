import React, { useState } from 'react';
import TeacherSidebar from '../pages/Teachers/Sidebar.jsx';
import TeacherDashboard from '../pages/Teachers/Dashboard.jsx';
import { LayoutContainer, ContentContainer } from '../styles/LayoutStyles.js';

const TeacherLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (open) => {
    setIsSidebarOpen(open);
  };

  return (
    <LayoutContainer>
      <TeacherSidebar onToggle={handleSidebarToggle} />
      <ContentContainer isOpen={isSidebarOpen}>
        <TeacherDashboard />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default TeacherLayout
