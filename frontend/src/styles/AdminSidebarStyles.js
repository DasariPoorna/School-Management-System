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

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? '#1A73E8' : '#000')};
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#1A73E8' : '#000')};
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    display: none; /* Hide toggle button on very small screens */
  }
`;

export const ToggleIcon = styled.span`
  font-size: 24px;
  transition: transform 0.3s ease;

  ${({ isOpen }) => isOpen && `
    transform: rotate(90deg);
  `}

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MobileToggleButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  display: none; /* Hide toggle button on larger screens */
  z-index: 110;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 105;
`;
