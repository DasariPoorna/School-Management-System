import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  GradesContainer,
  Content,
  SubjectGrade,
  SubjectName,
  GradeLabel,
  PerformanceLevel,
  SidebarContainer,
  Spinner,
  StudentSection,  // New styled component
  StudentName,     // New styled component
} from '../../styles/GradesStyles.js';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/grades`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Response data:', response.data);

        if (Array.isArray(response.data)) {
          setGrades(response.data);
          console.log('Grades set:', response.data);
        } else {
          setError('Unexpected response format.');
        }
      } catch (err) {
        console.error('Error fetching grades:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchGrades();
    } else {
      setError('Missing token.');
    }
  }, [token]);

  // Group grades by student
  const groupedGrades = grades.reduce((acc, grade) => {
    const studentName = grade.student_name || 'Unknown'; // Make sure student_name is part of grade object
    if (!acc[studentName]) {
      acc[studentName] = [];
    }
    acc[studentName].push(grade);
    return acc;
  }, {});

  return (
    <GradesContainer>
      <Content>
        <h2>Grades</h2>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error loading grades: {error}</p>
        ) : Object.keys(groupedGrades).length > 0 ? (
          Object.keys(groupedGrades).map((studentName) => (
            <StudentSection key={studentName}>
              <StudentName>{studentName}</StudentName>
              {groupedGrades[studentName].map((grade) => (
                <SubjectGrade key={grade.grade_id}>
                  <SubjectName>{grade.subject}</SubjectName>
                  <p>
                    <GradeLabel>Grade:</GradeLabel> {grade.grade}
                  </p>
                  <p>
                    <PerformanceLevel>{grade.performance_level}</PerformanceLevel>
                  </p>
                </SubjectGrade>
              ))}
            </StudentSection>
          ))
        ) : (
          <p>No grades available.</p>
        )}
      </Content>
    </GradesContainer>
  );
};

export default Grades;
