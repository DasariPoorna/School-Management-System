import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const ProfileSection = () => {
  const [parentInfo, setParentInfo] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check local storage for data and timestamp
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedData = JSON.parse(localStorage.getItem('parentInfo'));
    const dataTimestamp = localStorage.getItem('dataTimestamp');
    const now = new Date().getTime();
    const oneHour = 1000 * 60 * 60; // 1 hour in milliseconds

    if (!token) {
      navigate('/parent/signin'); // Redirect if no token is found
    } else if (storedData && dataTimestamp && (now - dataTimestamp < oneHour)) {
      setParentInfo(storedData);
    } else {
      fetch('http://localhost:5000/api/users/parent/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        setParentInfo(data);
        // Store data and timestamp in local storage
        localStorage.setItem('parentInfo', JSON.stringify(data));
        localStorage.setItem('dataTimestamp', now);
      })
      .catch(error => setError('Failed to fetch profile details'));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('role'); // Clear role from localStorage
    localStorage.removeItem('parentInfo'); // Clear stored profile info
    localStorage.removeItem('dataTimestamp'); // Clear data timestamp
    navigate('/parent/signin'); // Redirect to sign-in page
  };

  return (
    <ProfileContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{parentInfo.username}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{parentInfo.email}</ProfileInfo>
          <ProfileLabel>Role:</ProfileLabel>
          <ProfileInfo>{parentInfo.role}</ProfileInfo>
          <ProfileLabel>School:</ProfileLabel>
          <ProfileInfo>{parentInfo.schoolName}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Content>
    </ProfileContainer>
  );
};

export default ProfileSection;
