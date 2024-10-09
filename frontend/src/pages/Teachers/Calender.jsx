import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

// Styled Components
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const CalendarHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const CalendarTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .react-calendar__tile {
    background-color: #fff;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1a73e8;
      color: #fff;
    }

    &.react-calendar__tile--active {
      background-color: #1a73e8;
      color: #fff;
    }
  }

  .react-calendar__tile--now {
    background-color: #e8f0fe;
    border-radius: 8px;
  }
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  width: 100%;
`;

const EventItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Calendar Section Component
const CalendarSection = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>Event Calendar</CalendarTitle>
      </CalendarHeader>
      <StyledCalendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          // Add custom CSS classes to calendar dates based on conditions
          // Example: return 'highlight' for specific dates
          return '';
        }}
      />
      <EventList>
        <EventItem>
          <strong>Meeting with the Principal</strong> - 10:00 AM
        </EventItem>
        <EventItem>
          <strong>Parent-Teacher Conference</strong> - 2:00 PM
        </EventItem>
        <EventItem>
          <strong>Sports Day</strong> - 9:00 AM
        </EventItem>
      </EventList>
    </CalendarContainer>
  );
};

export default CalendarSection;
