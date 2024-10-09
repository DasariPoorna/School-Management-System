import React, { useState } from 'react';
import { 
  StudentContainer, 
  Header, 
  SubjectDropdown, 
  AssessmentTable, 
  FeedbackSection, 
  Button 
} from '../../styles/StudentMarksPageStyles.js';

const StudentMarksPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const assessments = [
    { date: '2024-08-14', type: 'Test', rubric: 'ME' },
  ];

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <StudentContainer>
      <Header>John Doe - Grade 1</Header>
      <SubjectDropdown value={selectedSubject} onChange={handleSubjectChange}>
        <option>Mathematics</option>
        <option>English</option>
        <option>Science</option>
      </SubjectDropdown>

      <AssessmentTable>
        <thead>
          <tr>
            <th>Assessment Date</th>
            <th>Assessment Type</th>
            <th>Overall Rubric</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment, index) => (
            <tr key={index}>
              <td>{assessment.date}</td>
              <td>{assessment.type}</td>
              <td>{assessment.rubric}</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </AssessmentTable>

      <FeedbackSection>
        <h3>Teacher Feedback</h3>
        <p>Great progress! Keep practicing addition.</p>
      </FeedbackSection>

      <Button>Download Report</Button>
    </StudentContainer>
  );
};

export default StudentMarksPage;
