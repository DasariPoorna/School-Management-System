// components/AdminLayout.js
import React, { useState } from 'react';
import AdminSidebar from '../pages/Admin/Sidebar';
import AdminDashboard from '../pages/Admin/Dashboard';

import { LayoutContainer, ContentContainer } from '../styles/LayoutStyles.js';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (open) => {
    setIsSidebarOpen(open);
  };

  return (
    <LayoutContainer>
      <AdminSidebar onToggle={handleSidebarToggle} />
      <ContentContainer isOpen={isSidebarOpen}>
        <AdminDashboard />

     
      </ContentContainer>
    </LayoutContainer>
  );
};

export default AdminLayout;
