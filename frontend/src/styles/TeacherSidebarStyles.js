import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  height: 100%;
  background-color: #ffffff;
  color: #000;
  overflow-y: auto;
  padding-top: 5px;
  transition: width 0.3s ease;
  z-index: 100;
  border-right: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '60px')};
  }

  @media (max-width: 480px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: ${({ isOpen }) => (isOpen ? '180px' : '0')};
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '150px' : '40px')};
  }

  @media (max-width: 480px) {
    width: ${({ isOpen }) => (isOpen ? '120px' : '30px')};
  }
`;

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    background-color: #636e72;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  transition: background-color 0.3s ease;
`;

export const ToggleIcon = styled.span`
  color: #fff;
  font-size: 20px;
  transition: transform 0.3s ease;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const SubNavItem = styled(SidebarNavItem)`
  padding-left: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? '#1A73E8' : '#000')};
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#1A73E8' : '#000')};
`;

export const Spacer = styled.div`
  flex: 1;
`;
