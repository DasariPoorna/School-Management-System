import styled from 'styled-components';

export const StudentDashboardContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Section = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 1.2em;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  @media (max-width: 768px) {
    padding: 15px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const CardContent = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
