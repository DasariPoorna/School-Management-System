import React from 'react';
import styled from 'styled-components';


// Styled components
const LearningMaterialsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const SubjectSection = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

const SubjectTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubjectNotes = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const NoteList = styled.ul`
  list-style-type: none;
  padding-left: 20px;

  li {
    font-size: 16px;
    margin-bottom: 8px;
    
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const BookLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const SidebarContainer = styled.div`
  flex: 0 0 240px;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const LearningMaterials = () => {
  return (
    <LearningMaterialsContainer>
      <Content>
        <h2>Learning Materials</h2>
        <SubjectSection>
          <SubjectTitle>Mathematics Notes</SubjectTitle>
          <SubjectNotes>Let's learn some cool math!</SubjectNotes>
          <NoteList>
            <li>Introduction to Counting</li>
            <li>Shapes and Colors</li>
            <li>Adding and Subtracting</li>
          </NoteList>
        </SubjectSection>
        <SubjectSection>
          <SubjectTitle>English Notes</SubjectTitle>
          <SubjectNotes>Ready to read and write?</SubjectNotes>
          <NoteList>
            <li>Learning the Alphabet</li>
            <li>Story Time</li>
            <li>Writing Fun</li>
          </NoteList>
        </SubjectSection>
        <SubjectSection>
          <SubjectTitle>Science Notes</SubjectTitle>
          <SubjectNotes>Exploring the wonders of nature!</SubjectNotes>
          <NoteList>
            <li>Plants and Animals</li>
            <li>Weather and Seasons</li>
            <li>Our Solar System</li>
          </NoteList>
        </SubjectSection>
        <SubjectSection>
          <SubjectTitle>Online Books</SubjectTitle>
          <SubjectNotes>Let's dive into some magical stories!</SubjectNotes>
          <NoteList>
            <li>Mathematics: <BookLink href="https://example.com/mathematics-book">Mathematics Book</BookLink></li>
            <li>English: <BookLink href="https://example.com/english-book">English Book</BookLink></li>
            <li>Science: <BookLink href="https://example.com/science-book">Science Book</BookLink></li>
          </NoteList>
        </SubjectSection>
      </Content>
    </LearningMaterialsContainer>
  );
}

export default LearningMaterials;
