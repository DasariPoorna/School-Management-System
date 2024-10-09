import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import {
  CurriculumList,
  CurriculumItem,
  CurriculumDetails,
  Actions,
  IconWrapper,
  OptionalText,
} from '../../styles/CurriculumStyles';

const GradeSection = styled.div`
  margin-bottom: 20px;
`;

const SubjectSection = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
`;

const CurriculumItemStyled = styled.div`
  margin-left: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CurriculumListDisplay = ({ curriculums, handleDeleteCurriculum, handleUpdateCurriculum }) => {
  const getCurriculumsByGradeAndSubject = () => {
    const grades = {};
    curriculums.forEach(curriculum => {
      if (!grades[curriculum.grade]) {
        grades[curriculum.grade] = {};
      }
      if (!grades[curriculum.grade][curriculum.subject]) {
        grades[curriculum.grade][curriculum.subject] = [];
      }
      grades[curriculum.grade][curriculum.subject].push(curriculum);
    });
    return grades;
  };

  const grades = getCurriculumsByGradeAndSubject();

  return (
    <CurriculumList>
      {Object.keys(grades).length > 0 ? (
        Object.keys(grades).map(grade => (
          <GradeSection key={grade}>
            <h3>{grade}</h3>
            {Object.keys(grades[grade]).map(subject => (
              <SubjectSection key={subject}>
                <h4>{subject}</h4>
                {grades[grade][subject].map(curriculum => (
                  <CurriculumItemStyled key={curriculum.id}>
                    <CurriculumDetails>
                      <h4>Topic: {curriculum.topic}</h4>
                      <p>Subject: {curriculum.subject}</p>
                      <p>Lesson: {curriculum.lesson}</p>
                      <p>Teacher: {curriculum.teacher ? curriculum.teacher.name : 'No teacher assigned'}</p>
                      <p>Timetable: {curriculum.timetable}</p>
                      <p>Class: {curriculum.class ? curriculum.class.grade : 'No class assigned'}</p>
                      <p>Sub-Topics:</p>
                      <ul>
                        {(Array.isArray(curriculum.subTopics) ? curriculum.subTopics : []).map((subTopic, index) => (
                          <li key={index}>{subTopic}</li>
                        ))}
                      </ul>
                    </CurriculumDetails>
                    <Actions>
                      <IconWrapper>
                        <FaEdit onClick={() => handleUpdateCurriculum(curriculum.id, curriculum)} />
                        <FaTrash onClick={() => handleDeleteCurriculum(curriculum.id)} />
                      </IconWrapper>
                    </Actions>
                  </CurriculumItemStyled>
                ))}
              </SubjectSection>
            ))}
          </GradeSection>
        ))
      ) : (
        <OptionalText>No curriculums available</OptionalText>
      )}
    </CurriculumList>
  );
};

export default CurriculumListDisplay;
