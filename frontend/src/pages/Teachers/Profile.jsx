import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherSidebar from './Sidebar';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  LogoutButton,
} from '../../styles/SettingsProfileStyles';

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Data expiration time (e.g., 1 hour)
  const DATA_EXPIRATION_TIME = 3600000; // 1 hour in milliseconds

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedTeacherInfo = JSON.parse(localStorage.getItem('teacherInfo'));
    const lastFetchTime = localStorage.getItem('teacherInfoFetchTime');

    if (!token) {
      navigate('/teacher/signin'); // Redirect if no token is found
    } else if (
      storedTeacherInfo && 
      lastFetchTime && 
      (Date.now() - lastFetchTime < DATA_EXPIRATION_TIME)
    ) {
      // Use cached data if available and not expired
      setTeacherInfo(storedTeacherInfo);
    } else {
      // Fetch data from the API if no cached data or data is expired
      fetch('https://zawadi-project.onrender.com/api/users/teacher/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setTeacherInfo(data);
          localStorage.setItem('teacherInfo', JSON.stringify(data)); // Store fetched data
          localStorage.setItem('teacherInfoFetchTime', Date.now()); // Store fetch time
        })
        .catch(error => setError('Failed to fetch profile details'));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('role'); // Clear role from localStorage
    localStorage.removeItem('teacherInfo'); // Clear cached data
    localStorage.removeItem('teacherInfoFetchTime'); // Clear fetch time
    navigate('/teacher/signin'); // Redirect to sign-in page
  };

  const updateTeacherInfo = (updatedData) => {
    setTeacherInfo(updatedData);
    localStorage.setItem('teacherInfo', JSON.stringify(updatedData)); // Update local storage with new data
    localStorage.setItem('teacherInfoFetchTime', Date.now()); // Update fetch time
  };

  return (
    <ProfileContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.username}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Role:</ProfileLabel>
          <ProfileInfo>{teacherInfo.role}</ProfileInfo>
          <ProfileLabel>School:</ProfileLabel>
          <ProfileInfo>{teacherInfo.schoolName}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Content>
    </ProfileContainer>
  );
};

export default TeacherProfileSection;
