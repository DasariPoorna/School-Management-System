import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  ProfileContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  LogoutButton,
} from '../../styles/SettingsProfileStyles';

const SettingsProfile = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to fetch data from the API
  const fetchProfileData = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/admin/signin');
      return;
    }

    try {
      const response = await fetch('https://zawadi-project.onrender.com/api/users/admin/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch profile details');
      
      const data = await response.json();
      setAdminInfo(data);

      // Store data in local storage with timestamp
      localStorage.setItem('adminInfo', JSON.stringify({
        ...data,
        timestamp: Date.now(),
      }));
    } catch (error) {
      setError('Failed to fetch profile details');
    }
  };

  // Function to check and use local storage data
  const loadProfileData = () => {
    const storedData = localStorage.getItem('adminInfo');
    const token = localStorage.getItem('token');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const isDataStale = (Date.now() - parsedData.timestamp) > 10 * 60 * 1000; // 10 minutes expiration

      if (!isDataStale) {
        setAdminInfo(parsedData);
        return;
      }
    }

    // Fetch new data if no valid local storage data
    fetchProfileData();
  };

  useEffect(() => {
    loadProfileData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('adminInfo'); // Clear stored admin info
    navigate('/admin/signin');
  };

  return (
    <ProfileContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{adminInfo.username}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{adminInfo.email}</ProfileInfo>
          <ProfileLabel>Role:</ProfileLabel>
          <ProfileInfo>{adminInfo.role}</ProfileInfo>
          <ProfileLabel>School Name:</ProfileLabel>
          <ProfileInfo>{adminInfo.schoolName}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;
