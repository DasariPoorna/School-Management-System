import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Layout,
  Sidebar as StyledSidebar,
  CollapseButton,
  List,
  ListItem,
  MainContent,
  SubtopicsList,
  SubtopicItem,
  RadioButton,
  ProgressBarContainer,
  ProgressBar,
  Progress,
  SubmitButton,
  CurriculumContent,
  TimetableButton,
  TimetableContainer,
  GradeBox,
  PDFDownloadButton,
} from '../../styles/ViewCurriculumManagementStyles.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarComponent = ({ grades, onSelectGrade, selectedGrade }) => {
  const [gradesExpanded, setGradesExpanded] = useState(true);

  return (
    <StyledSidebar>
      <CollapseButton onClick={() => setGradesExpanded(!gradesExpanded)}>
        {gradesExpanded ? '▼' : '▶'} Grades
      </CollapseButton>
      {gradesExpanded && (
        <List>
          {Object.keys(grades).map(grade => (
            <div key={grade}>
              <ListItem
                onClick={() => onSelectGrade(grade)}
                style={{ fontWeight: selectedGrade === grade ? 'bold' : 'normal' }}
              >
                Grade {grade}
              </ListItem>
              {selectedGrade === grade && (
                <div style={{ marginLeft: '20px' }}>
                  {grades[grade].map(subject => (
                    <ListItem key={subject.subject} onClick={() => onSelectGrade(grade, subject.subject)}>
                      {subject.subject}
                    </ListItem>
                  ))}
                </div>
              )}
            </div>
          ))}
        </List>
      )}
    </StyledSidebar>
  );
};

const MainContentComponent = ({ selectedGrade, selectedSubject, curriculums }) => {
  const filteredCurriculums = curriculums.filter(
    curriculum => curriculum.grade === selectedGrade && curriculum.subject === selectedSubject
  );

  const subtopics = filteredCurriculums.flatMap(curriculum => curriculum.subtopics || []);
  const [progress, setProgress] = useState(50); // Example progress value

  const handleRadioChange = (e, level) => {
    let newProgress = progress;
    if (level === 'subject') {
      newProgress = 100;
    } else if (level === 'topic') {
      newProgress = 75;
    } else if (level === 'subtopic') {
      newProgress = 50;
    }
    setProgress(newProgress);
  };

  const handleSubmit = () => {
    toast.success(`Progress for Grade ${selectedGrade}, Subject ${selectedSubject} submitted!`);
  };

  return (
    <MainContent>
      {filteredCurriculums.length > 0 ? (
        <CurriculumContent>
          <h3>{filteredCurriculums[0].lesson}</h3>
          <p>{filteredCurriculums[0].timetable}</p>
          <SubtopicsList>
            <SubtopicItem>
              <RadioButton
                name="progress"
                onChange={(e) => handleRadioChange(e, 'subject')}
              />
              Subject: {filteredCurriculums[0].subject}
            </SubtopicItem>
            {subtopics.map((subtopic, index) => (
              <SubtopicItem key={index}>
                <RadioButton
                  name="progress"
                  onChange={(e) => handleRadioChange(e, 'subtopic')}
                />
                {subtopic}
              </SubtopicItem>
            ))}
          </SubtopicsList>
          <ProgressBarContainer>
            <h3>Progress</h3>
            <ProgressBar>
              <Progress width={progress} />
            </ProgressBar>
            <SubmitButton onClick={handleSubmit}>Submit Progress</SubmitButton>
          </ProgressBarContainer>
        </CurriculumContent>
      ) : (
        <p>No curriculum data available for the selected grade and subject.</p>
      )}
    </MainContent>
  );
};

const ViewCurriculumManagement = () => {
  const [curriculums, setCurriculums] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [timetableExpanded, setTimetableExpanded] = useState(false);

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/curriculum-entries');
        setCurriculums(response.data);
        toast.success('Curriculums fetched successfully!');
      } catch (error) {
        toast.error('Error fetching curriculums.');
        console.error('Error fetching curriculums:', error);
      }
    };

    fetchCurriculums();
  }, []);

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

  const handleSelectGrade = (grade, subject = null) => {
    setSelectedGrade(grade);
    setSelectedSubject(subject);
  };

  const grades = getCurriculumsByGrade();

  return (
    <Layout>
      <ToastContainer />
      <SidebarComponent
        grades={grades}
        onSelectGrade={handleSelectGrade}
        selectedGrade={selectedGrade}
      />
      {selectedGrade && selectedSubject && (
        <MainContentComponent
          selectedGrade={selectedGrade}
          selectedSubject={selectedSubject}
          curriculums={curriculums}
        />
      )}
      <TimetableButton onClick={() => setTimetableExpanded(!timetableExpanded)}>
        {timetableExpanded ? 'Hide Timetables' : 'Download Timetable'}
      </TimetableButton>
      {timetableExpanded && (
        <TimetableContainer>
          <GradeBox>
            <h4>PP1</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1FbydlBCZz1b5PxuRnMLpb6wCu7EGtSpm" 
              download="PP1_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download PP1 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>PP2</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1FbydlBCZz1b5PxuRnMLpb6wCu7EGtSpm" 
              download="PP2_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download PP2 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>Grade 1</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1RjNk2E1LA15gXI78hb1jX388Bi1NshE8" 
              download="Grade1_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download Grade 1 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>Grade 2</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1RjNk2E1LA15gXI78hb1jX388Bi1NshE8" 
              download="Grade2_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download Grade 2 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>Grade 3</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1RjNk2E1LA15gXI78hb1jX388Bi1NshE8" 
              download="Grade3_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download Grade 3 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>Grade 4</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1-ZiScUSxBTq6zbSfhHHSAgpRTFxYWznk" 
              download="Grade4_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download Grade 4 Timetable
            </PDFDownloadButton>
          </GradeBox>
          <GradeBox>
            <h4>Grade 5</h4>
            <PDFDownloadButton 
              href="https://drive.google.com/uc?export=download&id=1-ZiScUSxBTq6zbSfhHHSAgpRTFxYWznk" 
              download="Grade5_timetable.pdf"
              rel="noopener noreferrer"
            >
              Download Grade 5 Timetable
            </PDFDownloadButton>
          </GradeBox>
        </TimetableContainer>
      )}
    </Layout>
  );
};

export default ViewCurriculumManagement;
