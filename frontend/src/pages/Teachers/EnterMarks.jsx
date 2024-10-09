import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import {
  EnterMarksContainer,
  FormContainer,
  InputGroup,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
  DownloadButton,
  Table,
  TableHeader,
  TableCell,
  ButtonGroup,
  ButtonSpacer,
  ActiveButton,
  InactiveButton,
  Header // New styled component for header
} from '../../styles/EnterMarksStyles.js'

const EnterMarksSection = () => {
  const [studentName, setStudentName] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [assessmentType, setAssessmentType] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState('');
  const [totalAnswers, setTotalAnswers] = useState('');
  const [enteredMarks, setEnteredMarks] = useState([]);

  const handleSubmitMarks = async (e) => {
    e.preventDefault();
    const newMark = { 
      studentName, 
      classLevel, 
      admissionNumber, 
      subject, 
      topic, 
      subtopic, 
      assessmentType,
      correctAnswers,
      totalAnswers
    };

    try {
      const url = assessmentType === 'Formative'
        ? 'http://localhost:5000/api/entered-marks/formative'
        : 'http://localhost:5000/api/entered-marks/summative';
        
      await axios.post(url, {
        student_id: admissionNumber, 
        subject,
        topic,
        subtopic,
        assessment_type: assessmentType,
        correct_answers: correctAnswers,
        total_answers: totalAnswers,
        performance_level: getPerformanceLevel(correctAnswers),
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setEnteredMarks([...enteredMarks, newMark]);
      setStudentName('');
      setClassLevel('');
      setAdmissionNumber('');
      setSubject('');
      setTopic('');
      setSubtopic('');
      setAssessmentType('');
      setCorrectAnswers('');
      setTotalAnswers('');
    } catch (error) {
      console.error('Error submitting marks:', error);
    }
  };

  const getPerformanceLevel = (correctAnswers) => {
    if (correctAnswers >= 90) return 'Excellent';
    if (correctAnswers >= 75) return 'Meets Expectation';
    if (correctAnswers >= 50) return 'Average';
    return 'Below Average';
  };

  const handleDownloadReport = (student) => {
    const doc = new jsPDF();
    doc.text('School Name: Your School Name', 10, 10);
    doc.text(`Student Name: ${student.studentName}`, 10, 20);
    doc.text(`Class: ${student.classLevel}`, 10, 30);
    doc.text(`Admission Number: ${student.admissionNumber}`, 10, 40);
    doc.text('Grades:', 10, 50);

    const startY = 60;
    let y = startY;

    student.grades.forEach((grade, index) => {
      doc.text(`${index + 1}. Subject: ${grade.subject}, Topic: ${grade.topic}, Subtopic: ${grade.subtopic}, Performance: ${getPerformanceLevel(grade.correctAnswers)}`, 10, y);
      y += 10;
    });

    doc.save(`${student.studentName}_Report.pdf`);
  };

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/grades', {
          params: { student_id: admissionNumber },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setEnteredMarks(response.data.map((grade) => ({
          studentName: grade.student_id,
          classLevel: '',
          admissionNumber: grade.student_id,
          subject: grade.subject,
          topic: grade.topic,
          subtopic: grade.subtopic,
          assessmentType: grade.assessment_type,
          correctAnswers: grade.correct_answers,
          totalAnswers: grade.total_answers,
        })));
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchGrades();
  }, [admissionNumber]);

  return (
    <EnterMarksContainer>
      <ButtonGroup>
        <ActiveButton 
          onClick={() => setAssessmentType('Summative')} 
          isActive={assessmentType === 'Summative'}
        >
          Add Summative Assessment
        </ActiveButton>
        <ButtonSpacer />
        <InactiveButton 
          onClick={() => setAssessmentType('Formative')} 
          isActive={assessmentType === 'Formative'}
        >
          Add Formative Assessment
        </InactiveButton>
      </ButtonGroup>
      
      {/* Header displaying the current assessment type */}
      <Header>{assessmentType ? `Enter ${assessmentType} Marks` : 'Select an Assessment Type'}</Header>

      <FormContainer>
        <form onSubmit={handleSubmitMarks}>
          <InputGroup>
            <Label>Student Name:</Label>
            <Input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Class:</Label>
            <Input type="text" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Admission Number:</Label>
            <Input type="text" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Subject:</Label>
            <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <Option value="">Select Subject</Option>
              <Option value="Math">Math</Option>
              <Option value="Science">Science</Option>
              <Option value="English">English</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Topic:</Label>
            <Input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Subtopic:</Label>
            <Input type="text" value={subtopic} onChange={(e) => setSubtopic(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Correct Answers:</Label>
            <Input type="number" value={correctAnswers} onChange={(e) => setCorrectAnswers(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Total Answers:</Label>
            <Input type="number" value={totalAnswers} onChange={(e) => setTotalAnswers(e.target.value)} />
          </InputGroup>
          <SubmitButton type="submit">Submit {assessmentType} Assessment</SubmitButton>
        </form>
      </FormContainer>

      {enteredMarks.length > 0 && (
        <div>
          <h3>Entered Marks</h3>
          <Table>
            <thead>
              <tr>
                <TableHeader>Student Name</TableHeader>
                <TableHeader>Class</TableHeader>
                <TableHeader>Admission Number</TableHeader>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Topic</TableHeader>
                <TableHeader>Subtopic</TableHeader>
                <TableHeader>Assessment Type</TableHeader>
                <TableHeader>Correct Answers</TableHeader>
                <TableHeader>Total Answers</TableHeader>
              </tr>
            </thead>
            <tbody>
              {enteredMarks.map((mark, index) => (
                <tr key={index}>
                  <TableCell>{mark.studentName}</TableCell>
                  <TableCell>{mark.classLevel}</TableCell>
                  <TableCell>{mark.admissionNumber}</TableCell>
                  <TableCell>{mark.subject}</TableCell>
                  <TableCell>{mark.topic}</TableCell>
                  <TableCell>{mark.subtopic}</TableCell>
                  <TableCell>{mark.assessmentType}</TableCell>
                  <TableCell>{mark.correctAnswers}</TableCell>
                  <TableCell>{mark.totalAnswers}</TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
          <DownloadButton onClick={() => handleDownloadReport({ studentName, classLevel, admissionNumber, grades: enteredMarks })}>
            Download Report
          </DownloadButton>
        </div>
      )}
    </EnterMarksContainer>
  );
};

export default EnterMarksSection;
