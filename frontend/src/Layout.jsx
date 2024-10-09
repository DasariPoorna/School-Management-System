import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AdminSidebar from './pages/Admin/Sidebar';
import StudentSidebar from './pages/Students/Sidebar';
import TeacherSidebar from './pages/Teachers/Sidebar';
import ParentSidebar from './pages/Parents/Sidebar';
import SuperAdminSidebar from './pages/SuperAdminDashboard/Sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 80px; /* Default for small devices */

  @media (min-width: 768px) {
    margin-left: 100px; /* For tablets and above */
  }

  @media (min-width: 1024px) {
    margin-left: 120px; /* For larger screens */
  }
`;

const Layout = ({ children }) => {
  const location = useLocation();

  const renderSidebar = () => {
    if (location.pathname.startsWith('/admin')) {
      return <AdminSidebar />;
    }
    if (location.pathname.startsWith('/student')) {
      return <StudentSidebar />;
    }
    if (location.pathname.startsWith('/teacher')) {
      return <TeacherSidebar />;
    }
    if (location.pathname.startsWith('/parent')) {
      return <ParentSidebar />;
    }
    if (location.pathname.startsWith('/super-admin')) {
      return <SuperAdminSidebar />;
    }
    return null;
  };

  return (
    <LayoutContainer>
      {renderSidebar()}
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
