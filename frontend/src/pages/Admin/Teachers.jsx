import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
  TeacherDetails,
  TeacherTable,
  TeacherTh,
  TeacherTd
} from '../../styles/DashboardStyles'; // Import styled components from DashboardStyles.js

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '', qualification: '', experience: '', performance: '' });
  const [teachers, setTeachers] = useState([]);

  // Fetch teachers data when the component mounts
  useEffect(() => {
    fetchTeachers();
  }, []);

  // Function to fetch teachers from the backend
  const fetchTeachers = async () => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/teachers');
      setTeachers(response.data.teachers || []);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  // Function to handle adding a new teacher
  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (newTeacher.name.trim() !== '' && newTeacher.email.trim() !== '' && newTeacher.subject.trim() !== '' && newTeacher.qualification.trim() !== '' && newTeacher.experience.trim() !== '' && newTeacher.performance.trim() !== '') {
      try {
        const response = await axios.post('https://zawadi-project.onrender.com/api/teachers', newTeacher);
        const createdTeacher = response.data.teacher;
        setTeachers([...teachers, createdTeacher]); // Update the state to include the newly added teacher
        setNewTeacher({ name: '', email: '', subject: '', qualification: '', experience: '', performance: '' });
        toast.success('Teacher Added successfully!');
      } catch (error) {
        console.error('Error adding teacher:', error);
        toast.error('Error adding Teacher');
      }
    }
  };

  return (
    <TeachersContainer>
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <AddTeacherForm onSubmit={handleAddTeacher}>
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher name"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            />
            <AddTeacherInput
              type="email"
              placeholder="Enter teacher email"
              value={newTeacher.email}
              onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher subject"
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher qualification"
              value={newTeacher.qualification}
              onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher experience"
              value={newTeacher.experience}
              onChange={(e) => setNewTeacher({ ...newTeacher, experience: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher performance"
              value={newTeacher.performance}
              onChange={(e) => setNewTeacher({ ...newTeacher, performance: e.target.value })}
            />
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherDetails>
            <TeacherTable>
              <thead>
                <tr>
                  <TeacherTh>Name</TeacherTh>
                  <TeacherTh>Subject</TeacherTh>
                  <TeacherTh>Qualification</TeacherTh>
                  <TeacherTh>Experience</TeacherTh>
                  <TeacherTh>Performance</TeacherTh>
                </tr>
              </thead>
              
              {/* <tbody>
                {teachers && teachers.length > 0 ? (
                  teachers.map((teacher, index) => (
                    <tr key={index}>
                      <TeacherTd>{teacher.name}</TeacherTd>
                      <TeacherTd>{teacher.subject}</TeacherTd>
                      <TeacherTd>{teacher.qualification}</TeacherTd>
                      <TeacherTd>{teacher.experience}</TeacherTd>
                      <TeacherTd>{teacher.performance}</TeacherTd>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <TeacherTd colSpan="5">No teachers found</TeacherTd>
                  </tr>
                )}
              </tbody> */}
            </TeacherTable>
          </TeacherDetails>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
