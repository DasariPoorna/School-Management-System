import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentTextArea,
  AssignmentButton,
  MultipleChoiceContainer,
  MultipleChoiceOption,
  RadioInput,
  RadioLabel,
  AssignmentTypeLabel,
  TextAreaContainer,
} from '../../styles/AssignmentsStyles.js';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [activeAssignmentId, setActiveAssignmentId] = useState(null);
  const [submission, setSubmission] = useState('');
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDoAssignment = async (assignmentId) => {
    try {
      const assignment = assignments.find(
        (assignment) => assignment.id === assignmentId
      );

      const submissionData = assignment.type === 'Essay'
        ? { submission }
        : { submission: selectedChoice };

      await axios.post('http://localhost:5000/api/student-assignments', {
        assignment_id: assignmentId,
        ...submissionData,
      });
      setSubmission('');
      setSelectedChoice(null);
      setActiveAssignmentId(null);
      alert('Assignment submitted successfully');
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Failed to submit assignment');
    }
  };

  const handleSelectAssignment = (assignmentId) => {
    setActiveAssignmentId(assignmentId);
    setSubmission('');
    setSelectedChoice(null);
  };

  return (
    <AssignmentsContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id}>
            <AssignmentTypeLabel type={assignment.type}>
              {assignment.type}
            </AssignmentTypeLabel>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>

            <AssignmentButton
              onClick={() => {
                activeAssignmentId === assignment.id
                  ? handleDoAssignment(assignment.id)
                  : handleSelectAssignment(assignment.id);
              }}
            >
              {activeAssignmentId === assignment.id
                ? 'Submit'
                : 'Select Assignment'}
            </AssignmentButton>

            {/* Render text area for essay assignments if selected */}
            {activeAssignmentId === assignment.id && assignment.type === 'Essay' && (
              <TextAreaContainer>
                <AssignmentTextArea
                  placeholder="Enter your submission"
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  rows="4"
                />
              </TextAreaContainer>
            )}

            {/* Render choices for multiple choice assignments if selected */}
            {activeAssignmentId === assignment.id && assignment.type === 'Multiple Choice' && Array.isArray(assignment.choices) ? (
              <MultipleChoiceContainer>
                {assignment.choices.map((choice) => (
                  <MultipleChoiceOption key={choice.label}>
                    <RadioInput
                      type="radio"
                      name={`assignment-${assignment.id}`}
                      value={choice.label}
                      checked={selectedChoice === choice.label}
                      onChange={(e) => setSelectedChoice(e.target.value)}
                    />
                    <RadioLabel>{choice.text}</RadioLabel>
                  </MultipleChoiceOption>
                ))}
              </MultipleChoiceContainer>
            ) : (
              assignment.type === 'Multiple Choice' && activeAssignmentId === assignment.id && (
                <p>No choices available for this assignment.</p>
              )
            )}
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;
