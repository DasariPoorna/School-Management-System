// src/GradesStyles.js

import styled from 'styled-components';

export const GradesContainer = styled.div`
  display: flex;
  padding-left: 240px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const SubjectGrade = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const SubjectName = styled.h3`
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const GradeLabel = styled.span`
  font-weight: bold;
`;

export const PerformanceLevel = styled.span`
  margin-left: 10px;
  font-style: italic;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 240px;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;


export const StudentSection = styled.div`
  margin-bottom: 20px;
`;

export const StudentName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
`;
