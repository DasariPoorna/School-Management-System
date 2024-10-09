import React, { useState } from 'react';
import { 
  Container, Title, Description, GradeSection, GradeTitle, 
  AddButton, ResourceForm, StyledLabel, StyledInput, SubmitButton 
} from '../../../styles/ResourcesStyles.js';

const SuperTimetable = () => {
  const [openGrade, setOpenGrade] = useState(null);

  const grades = ['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];

  const handleToggleResourceForm = (grade) => {
    setOpenGrade(openGrade === grade ? null : grade);
  };

  return (
    <Container>
      <Title>Timetable</Title>
      <Description>Here you can manage the timetable.</Description>
      {grades.map((grade) => (
        <GradeSection key={grade}>
          <GradeTitle>{grade}</GradeTitle>
          <AddButton onClick={() => handleToggleResourceForm(grade)}>
            + Add the resource
          </AddButton>
          {openGrade === grade && (
            <ResourceForm>
              <StyledLabel htmlFor={`file-${grade}`}>
                Choose the document from your desktop, press here
              </StyledLabel>
              <StyledInput
                type="file"
                id={`file-${grade}`}
                style={{ display: 'none' }}
              />
              <SubmitButton>Add Resource</SubmitButton>
            </ResourceForm>
          )}
        </GradeSection>
      ))}
    </Container>
  );
};

export default SuperTimetable;
