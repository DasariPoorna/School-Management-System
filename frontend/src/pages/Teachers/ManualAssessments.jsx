import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AssessmentsContainer,
  SectionTitle,
  ButtonGroup,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton
} from '../../styles/AssessmentsStyles.js';

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('summative'); // Default to Summative assessments
  const [newAssessment, setNewAssessment] = useState({
    title: '',
    description: '',
    classId: '',
    subject: '',
    date: '',
    duration: '',
    totalMarks: '',
    teacherId: '',
    studentId: '',
  });
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data for classes, teachers, and students from the backend
    axios.get('http://localhost:5000/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));

    axios.get('http://localhost:5000/api/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));

    axios.get('http://localhost:5000/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssessment({ ...newAssessment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/assessment', newAssessment)
      .then(response => {
        console.log('New Assessment created:', response.data);
        // Clear form after submission
        setNewAssessment({
          title: '',
          description: '',
          classId: '',
          subject: '',
          date: '',
          duration: '',
          totalMarks: '',
          teacherId: '',
          studentId: '',
        });
      })
      .catch(error => console.error('Error creating assessment:', error));
  };

  return (
    <AssessmentsContainer>
      <SectionTitle>Assessments</SectionTitle>
      <ButtonGroup>
        <Button isActive={activeTab === 'summative'} onClick={() => handleTabChange('summative')}>
          Summative Assessments
        </Button>
        <Button isActive={activeTab === 'formative'} onClick={() => handleTabChange('formative')}>
          Formative Assessments
        </Button>
      </ButtonGroup>

      <div>
        <h3>Manually Enter Assessments</h3>
        <p>
          {activeTab === 'summative'
            ? 'Here teachers can create, view, assign, and submit results for Summative assessments.'
            : 'Here teachers can create, view, assign, and submit results for Formative assessments.'}
        </p>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title:</Label>
              <Input
                type="text"
                name="title"
                value={newAssessment.title}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>
              <TextArea
                name="description"
                value={newAssessment.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Class ID:</Label>
              <Select
                name="classId"
                value={newAssessment.classId}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                {classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Subject:</Label>
              <Input
                type="text"
                name="subject"
                value={newAssessment.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Date:</Label>
              <Input
                type="date"
                name="date"
                value={newAssessment.date}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Duration:</Label>
              <Input
                type="text"
                name="duration"
                value={newAssessment.duration}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Total Marks:</Label>
              <Input
                type="number"
                name="totalMarks"
                value={newAssessment.totalMarks}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Teacher ID:</Label>
              <Select
                name="teacherId"
                value={newAssessment.teacherId}
                onChange={handleChange}
                required
              >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Student ID:</Label>
              <Select
                name="studentId"
                value={newAssessment.studentId}
                onChange={handleChange}
              >
                <option value="">Select Student (optional)</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <SubmitButton type="submit">
              {activeTab === 'summative' ? 'Create Summative Assessment' : 'Create Formative Assessment'}
            </SubmitButton>
          </form>
        </FormContainer>
      </div>
    </AssessmentsContainer>
  );
};

export default Assessments;
