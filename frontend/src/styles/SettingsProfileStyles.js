import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    display: center;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;

  @media (max-width: 768px) {
    flex: 1;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProfileDetails = styled.div`
  max-width: 400px;
  margin-bottom: 20px;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  margin-bottom: 10px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;
