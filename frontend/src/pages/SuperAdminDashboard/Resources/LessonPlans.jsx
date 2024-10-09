import React, { useState } from 'react';
import axios from 'axios';
import { 
  Container, Title, Description, GradeSection, GradeTitle, 
  AddButton, ResourceForm, StyledLabel, StyledInput, 
  SubmitButton, FileName, ProgressContainer, ProgressBar 
} from '../../../styles/ResourcesStyles'; // Import the new progress styles

const SuperLessonPlans = () => {
  const [openGrade, setOpenGrade] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  const grades = ['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];

  const handleToggleResourceForm = (grade) => {
    setOpenGrade(openGrade === grade ? null : grade);
  };

  const handleFileChange = (e, grade) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFiles({
        ...selectedFiles,
        [grade]: file
      });
    }
  };

  const handleSubmit = async (grade) => {
    const file = selectedFiles[grade];
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('lessonPlanId', '1'); // Replace '1' with the actual lesson plan ID

    try {
      await axios.post('/api/lessonPlanResources/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(prev => ({
            ...prev,
            [grade]: percent
          }));
        }
      });

      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }

    // After upload, clear the selected file and progress
    setSelectedFiles({
      ...selectedFiles,
      [grade]: null
    });
    setUploadProgress(prev => ({
      ...prev,
      [grade]: 0
    }));
  };

  return (
    <Container>
      <Title>Lesson Plans</Title>
      <Description>Here you can manage lesson plans.</Description>
      {grades.map((grade) => (
        <GradeSection key={grade}>
          <GradeTitle>{grade}</GradeTitle>
          <AddButton onClick={() => handleToggleResourceForm(grade)}>
            + Add the resource
          </AddButton>
          {openGrade === grade && (
            <ResourceForm>
              {selectedFiles[grade] && <FileName>{selectedFiles[grade].name}</FileName>}
              <StyledLabel htmlFor={`file-${grade}`}>
                Choose the document from your desktop, press here
              </StyledLabel>
              <StyledInput
                type="file"
                id={`file-${grade}`}
                onChange={(e) => handleFileChange(e, grade)}
              />
              {uploadProgress[grade] && (
                <ProgressContainer>
                  <ProgressBar style={{ width: `${uploadProgress[grade]}%` }} />
                </ProgressContainer>
              )}
              <SubmitButton onClick={() => handleSubmit(grade)}>
                Add Resource
              </SubmitButton>
            </ResourceForm>
          )}
        </GradeSection>
      ))}
    </Container>
  );
};

export default SuperLessonPlans;
