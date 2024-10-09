import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  padding-left: 250px;
  background-color: #f9f9f9;
  min-height: 100vh;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
  background: #fff;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const GradeSection = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const GradeTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  color: #007bff;
`;

const SubjectSection = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const SubjectTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #555;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

const CurriculumItem = styled.div`
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const CurriculumLesson = styled.h5`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const CurriculumDetails = styled.p`
  margin: 5px 0 0;
  color: #666;
`;

const ViewCurriculum = () => {
  const [curriculums, setCurriculums] = useState([]);
  const { grade, subject } = useParams();

  useEffect(() => {
    fetchCurriculums();
  }, []);

  const fetchCurriculums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/curriculum-entries');
      setCurriculums(response.data);
      toast.success('Curriculums fetched successfully!');
    } catch (error) {
      toast.error('Error fetching curriculums.');
      console.error('Error fetching curriculums:', error);
    }
  };

  const getCurriculumsByGrade = () => {
    const grades = {};
    curriculums.forEach(curriculum => {
      if (!grades[curriculum.grade]) {
        grades[curriculum.grade] = [];
      }
      grades[curriculum.grade].push(curriculum);
    });
    return grades;
  };

  const grades = getCurriculumsByGrade();

  return (
    <Container>
      <ToastContainer />
      <Header>
        <Title>View Curriculum</Title>
      </Header>
      {Object.keys(grades).map(grade => (
        <GradeSection key={grade}>
          <GradeTitle>{grade}</GradeTitle>
          {grades[grade].map(curriculum => (
            <SubjectSection key={curriculum.subject}>
              <Link to={`/teacher/view-curriculum/${grade}/${curriculum.subject}`}>
                <SubjectTitle>{curriculum.subject}</SubjectTitle>
              </Link>
              {curriculum.subject === subject && (
                <CurriculumItem>
                  <CurriculumLesson>{curriculum.lesson}</CurriculumLesson>
                  <CurriculumDetails>{curriculum.timetable}</CurriculumDetails>
                </CurriculumItem>
              )}
            </SubjectSection>
          ))}
        </GradeSection>
      ))}
    </Container>
  );
};

export default ViewCurriculum;
