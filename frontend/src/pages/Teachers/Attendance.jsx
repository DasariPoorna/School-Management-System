import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSidebar from './Sidebar';
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  StatusButton,
  SubmitButton,
  ClassSelector,
  DateSelector
} from '../../styles/CheckAttendanceStyles';

const CheckAttendanceSection = () => {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    if (selectedClass) {
      fetchStudents(selectedClass);
    }
  }, [selectedClass]);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const fetchStudents = async (classId) => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/students-by-class', {
        params: { class_id: classId },
      });
      setStudents(response.data);
      initializeAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: 'Present', // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert('Please select a date for attendance.');
      return;
    }
  
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        student_id: id,
        student_name: name,
        attendance_date: selectedDate,
        status,
      }));
      await axios.post('https://zawadi-project.onrender.com/api/attendance-records', { attendanceData: formattedData });
      alert('Attendance data submitted successfully.');
    } catch (error) {
      console.error('Error submitting attendance data:', error);
    }
  };
  

  return (
    <AttendanceContainer>
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <ClassSelector>
            <label>Select Class: </label>
            <select onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
              <option value="">--Select Class--</option>
              {classes.map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.grade} {/* Use grade or another appropriate property */}
                </option>
              ))}
            </select>
          </ClassSelector>
          <DateSelector>
            <label>Select Date: </label>
            <input
              type="date"
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
            />
          </DateSelector>
          {students.length > 0 ? (
            <AttendanceList>
              {students.map((student) => (
                <AttendanceItem key={student.id}>
                  <StudentName>{student.name}</StudentName>
                  <div>
                    <StatusButton
                      selected={attendanceData.find(data => data.id === student.id)?.status === 'Present'}
                      onClick={() => handleStatusChange(student.id, 'Present')}
                    >
                      Present
                    </StatusButton>
                    <StatusButton
                      selected={attendanceData.find(data => data.id === student.id)?.status === 'Absent'}
                      onClick={() => handleStatusChange(student.id, 'Absent')}
                    >
                      Absent
                    </StatusButton>
                    <StatusButton
                      selected={attendanceData.find(data => data.id === student.id)?.status === 'Absent with apology'}
                      onClick={() => handleStatusChange(student.id, 'Absent with apology')}
                    >
                      Absent with apology
                    </StatusButton>
                  </div>
                </AttendanceItem>
              ))}
            </AttendanceList>
          ) : (
            <p>No students found for the selected class.</p>
          )}
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;
