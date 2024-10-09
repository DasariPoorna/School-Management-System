// styles/LayoutStyles.js
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
`;
