import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  GoBackButton // Import the styled button
} from '../../styles/AssignmentsStyles';

const StudentAssignmentsPage = () => {
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubmittedAssignments();
  }, []);

  const fetchSubmittedAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/submitted-assignments');
      setSubmittedAssignments(response.data);
    } catch (error) {
      console.error('Error fetching submitted assignments:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/teacher/assignments'); // Navigate back to the assignments page
  };

  return (
    <AssignmentsContainer>
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Students Assignments Submitted</AssignmentsHeader>
          <AssignmentList>
            {submittedAssignments && submittedAssignments.length > 0 ? (
              submittedAssignments.map((assignment) => (
                <AssignmentItem key={assignment.id}>
                  <strong>{assignment.title}: </strong>
                  {assignment.description}, {assignment.grade}, {assignment.submissionDate}
                </AssignmentItem>
              ))
            ) : (
              <p>No assignments submitted yet</p>
            )}
          </AssignmentList>
          <GoBackButton onClick={handleGoBack}>Go Back</GoBackButton>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignmentsPage;
