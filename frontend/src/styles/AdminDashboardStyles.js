import styled from 'styled-components';

// Container with padding and full width
export const AdminDashboardContainer = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

// Centered content with max-width
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

// Section with padding and shadow
export const Section = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Margin for the overview section
export const OverviewSection = styled.div`
  margin-bottom: 20px;
`;

// Section title with responsive font size
export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Flex container for cards
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Card with responsive properties
export const Card = styled.div`
  flex: 1;
  min-width: 200px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 10px;
  }
`;

// Card title with responsive font size
export const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Card content with emphasis
export const CardContent = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Container for horizontal layout
export const HorizontalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Half width section for responsive layout
export const HalfWidthSection = styled.div`
  flex: 1;
  min-width: 45%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

// Calendar section with background and padding
export const CalendarSection = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
`;

// Calendar title with responsive font size
export const CalendarTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Flex container for calendar days
export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Calendar day with responsive width
export const CalendarDay = styled.div`
  width: calc(100% / 7);
  text-align: center;
  margin-bottom: 5px;
  padding: 5px;

  @media (max-width: 768px) {
    width: calc(100% / 7);
    font-size: 0.8rem;
  }
`;

// Teacher details container
export const TeacherDetails = styled.div`
  margin-top: 20px;
`;

// Teacher table with full width
export const TeacherTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Table header with styling
export const TeacherTh = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f2f2f2;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Table cell with styling
export const TeacherTd = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Chart container with background and padding
export const ChartContainer = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
