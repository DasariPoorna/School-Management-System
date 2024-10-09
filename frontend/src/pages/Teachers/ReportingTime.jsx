import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';  // Import axios for API requests
import {
  Container,
  Form,
  Input,
  Select,
  Button,
  Label,
  Title,
  TimeContainer,
} from '../../styles/ReportingTimeStyles';

const ReportingTime = () => {
  const [teacherName, setTeacherName] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [session, setSession] = useState('');
  const [teacherNames, setTeacherNames] = useState([]);  // State to store teacher names

  // Fetch teacher names from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/teachers');
        setTeacherNames(response.data);  // Assuming the response is an array of teacher objects
      } catch (error) {
        console.error('Error fetching teachers:', error);
        toast.error('Failed to fetch teachers.');
      }
    };

    fetchTeachers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = {
      teacherName,
      arrivalTime,
      departureTime,
      session,
      status: getStatus(arrivalTime),  // Calculate status based on arrival time
    };

    try {
      const response = await axios.post('https://zawadi-project.onrender.com/api/reporting-time', reportData);
      toast.success('Report submitted successfully!');
      console.log('Report Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting report:', error);
      toast.error('Failed to submit report.');
    }
  };

  const getStatus = (time) => {
    if (time >= '08:00') return 'Late';
    if (time >= '07:30' && time < '08:00') return 'On Time';
    return 'Early';
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Teacher Reporting Time</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Select Teacher</Label>
        <Select value={teacherName} onChange={(e) => setTeacherName(e.target.value)} required>
          <option value="" disabled>Select Teacher</option>
          {teacherNames.map((teacher, index) => (
            <option key={index} value={teacher.name}>{teacher.name}</option>  // Assuming teacher objects have a 'name' field
          ))}
        </Select>

        <Label>Select Session</Label>
        <Select value={session} onChange={(e) => setSession(e.target.value)} required>
          <option value="" disabled>Select Session</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </Select>

        <Label>Arrival Time</Label>
        <TimeContainer> 
          <Input
            type="time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
          />
        </TimeContainer>

        <Label>Departure Time</Label>
        <TimeContainer>
          <Input
            type="time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            
          />
        </TimeContainer>

        <Button type="submit">Submit Report</Button>
      </Form>
    </Container>
  );
};

export default ReportingTime;
