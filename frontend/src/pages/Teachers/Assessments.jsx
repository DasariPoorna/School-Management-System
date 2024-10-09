import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  SubmitButton,
  DownloadButton,
  ExpandableContainer,
  AssessmentBox,
  AssessmentTitle,
  AssessmentContent,
  GradeContainer,
  PDFDownloadButton,
} from '../../styles/AssessmentsStyles.js';
import axios from 'axios';

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('summative'); // Default to Summative assessments
  const [showAllAssessments, setShowAllAssessments] = useState(false); // Manage visibility of expanded content
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

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data for classes, teachers, and students from the backend
    axios.get('https://zawadi-project.onrender.com/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));

    axios.get('https://zawadi-project.onrender.com/api/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));

    axios.get('https://zawadi-project.onrender.com/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleManualEntry = () => {
    navigate('/teacher/manual-assessments');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssessment({ ...newAssessment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://zawadi-project.onrender.com/api/assessment', newAssessment)
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
        <Button onClick={handleManualEntry}>Enter Assessments Manually</Button>
        <Button isActive={activeTab === 'formative'} onClick={() => handleTabChange('formative')}>
          Formative Assessments
        </Button>
      </ButtonGroup>
      <DownloadButton onClick={() => setShowAllAssessments(!showAllAssessments)}>
        {showAllAssessments ? 'Collapse Assessments' : 'Download All Grade Assessments'}
      </DownloadButton>
      {showAllAssessments && (
        <ExpandableContainer>
          <GradeContainer>
            <AssessmentTitle>PP1 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for PP1.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="PP1_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download PP1 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>PP2 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for PP2.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl1n0oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="PP2_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download PP2 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 1 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 1.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl2n0oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade1_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 1 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 2 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 2.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl3n0oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade2_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 2 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 3 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 3.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl4n0oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade3_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 3 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 4 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 4.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl5n0oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade4_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 4 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 5 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 5.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade5_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 5 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>

          <GradeContainer>
            <AssessmentTitle>Grade 6 Assessments</AssessmentTitle>
            <AssessmentBox>
              <AssessmentContent>Click below to download the assessment document for Grade 6.</AssessmentContent>
              <PDFDownloadButton 
                href="https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o" 
                download="Grade6_Assessment.pdf"
                rel="noopener noreferrer"
              >
                Download Grade 6 Assessment PDF
              </PDFDownloadButton>
            </AssessmentBox>
          </GradeContainer>
        </ExpandableContainer>
      )}
      {activeTab === 'summative' && (
        <div>
          <h3>Summative Assessments Content</h3>
          <p>Here teachers can create, view, assign, and submit results for Summative assessments.</p>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" name="title" value={newAssessment.title} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea id="description" name="description" value={newAssessment.description} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="classId">Class</Label>
                <Select id="classId" name="classId" value={newAssessment.classId} onChange={handleChange} required>
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" name="subject" value={newAssessment.subject} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="date">Date</Label>
                <Input type="date" id="date" name="date" value={newAssessment.date} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="duration">Duration (in minutes)</Label>
                <Input type="number" id="duration" name="duration" value={newAssessment.duration} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="totalMarks">Total Marks</Label>
                <Input type="number" id="totalMarks" name="totalMarks" value={newAssessment.totalMarks} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="teacherId">Teacher</Label>
                <Select id="teacherId" name="teacherId" value={newAssessment.teacherId} onChange={handleChange} required>
                  <option value="">Select Teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="studentId">Student</Label>
                <Select id="studentId" name="studentId" value={newAssessment.studentId} onChange={handleChange} required>
                  <option value="">Select Student</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <SubmitButton type="submit">Create Assessment</SubmitButton>
            </form>
          </FormContainer>
        </div>
      )}
      {activeTab === 'formative' && (
        <div>
          <h3>Formative Assessments Content</h3>
          <p>Here teachers can create, view, and assign Formative assessments.</p>
        </div>
      )}
    </AssessmentsContainer>
  );
};

export default Assessments;
