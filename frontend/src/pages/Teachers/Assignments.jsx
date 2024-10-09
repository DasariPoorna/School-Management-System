import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash, FaCheckCircle, FaEye } from 'react-icons/fa';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  AssignmentTypeSelect,
  AddChoiceButton,
  ChoiceInputContainer,
  ChoiceInput,
  SeeAssignmentsButton,
  StudentAssignmentsButton,
  ButtonContainer,
  DownloadButton,
  GradeList,
  GradeItem,
  SubjectList,
  SubjectItem,
  NoteLink,
} from '../../styles/AssignmentsStyles';
import { useNavigate } from 'react-router-dom';

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });
  const [assignments, setAssignments] = useState([]);
  const [showAssignments, setShowAssignments] = useState(false);
  const [showGrades, setShowGrades] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('https://zawadi-project.onrender.com/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
      // toast.error('Failed to fetch assignments');
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.description && newAssignment.grade && newAssignment.deadline) {
      try {
        const response = await axios.post('https://zawadi-project.onrender.com/api/assignments', newAssignment);
        setAssignments([...assignments, response.data]);
        setNewAssignment({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });
        toast.success('Assignment added successfully');
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('Failed to add assignment');
      }
    } else {
      toast.warning('Please fill in all fields');
    }
  };

  const handleDeleteAssignment = async (id) => {
    try {
      await axios.delete(`https://zawadi-project.onrender.com/api/assignments/${id}`);
      setAssignments(assignments.filter(assignment => assignment.id !== id));
      toast.success('Assignment deleted successfully');
    } catch (error) {
      console.error('Error deleting assignment:', error);
      toast.error('Failed to delete assignment');
    }
  };

  const handleEditAssignment = (assignment) => {
    setNewAssignment(assignment);
  };

  const handleToggleAssignments = () => {
    setShowAssignments(!showAssignments);
    if (!showAssignments) {
      navigate('/teacher/assignments');
    }
  };

  const handleNavigateToStudentAssignments = () => {
    navigate('/teacher/student-assignments-submitted');
  };

  const handleToggleGrades = () => {
    setShowGrades(!showGrades);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const gradeSubjectLinks = {

    'Grade 1': {
      Hygiene: 'https://drive.google.com/uc?export=download&id=1qPmiZf4PdgrUO6Sq8z1aeINweHud3Gzd',


    },
    'Grade 4': {
      SocialStudies: 'https://drive.google.com/uc?export=download&id=1HG3w4ZSGjm50koPQafbB7nLKRteuicMc',
      Hygiene: 'https://drive.google.com/uc?export=download&id=1gwgynOKmkEfNkHtDpMV4aEcin3LNiqpV',
      Music: 'https://drive.google.com/uc?export=download&id=1TnH3kE6ZrrAGOsdogiGSD8HzXmQUMa_6',
      CRE: 'https://drive.google.com/uc?export=download&id=1vX-eQr8inAxlXz95pOVADkiIriQ7iqbA',
      ART: 'https://drive.google.com/uc?export=download&id=1A0ItxAMnHfQ-XlVJKp2hercbNqkrexax',      
    },
    'Grade 5': {
      Social: 'https://drive.google.com/uc?export=download&id=14fSwURr-bTOmqxv42vUe4fUaxkqg8iQz',
      Science: 'https://drive.google.com/uc?export=download&id=1-I-4QjSg21NMase19qjVZeuzliQlN7Ug',
      PE: 'https://drive.google.com/uc?export=download&id=1g1efhIGHLRFl9imeU96BEVMlDpfn0bBM',
      Music: 'https://drive.google.com/uc?export=download&id=14RkTxKTXC4RN26LF_Gwkv2kKn0H0VFtY',
      HSCI: 'https://drive.google.com/uc?export=download&id=1eVCJB43F4GflQhdDC98264Dkuu7V5jXl',
      CRE: 'https://drive.google.com/uc?export=download&id=1QcdVEDJpBPWHxaHbb3Moho7DDIdk3lgT',
      ART: 'https://drive.google.com/uc?export=download&id=1cwUBDAcp0xxVyRbzLqCYLrhjgeYyXVG5',      
    },
    'Grade 6': {
      AGR: 'https://drive.google.com/uc?export=download&id=19ncAMT-3XddZYx9Rxcwq0t3B3bbaHfIT',
      ART: 'https://drive.google.com/uc?export=download&id=1mSckThi1A546gYpYUqgDHGA9sBIrNtUV',
      CRE: 'https://drive.google.com/uc?export=download&id=1xgF37jdCfbVEfundTrntoIRTuOmtmehl',
      HSCI: 'https://drive.google.com/uc?export=download&id=1WLzxlyFKS7I-oISisig5TSuxhs7kER-g',
      Music: 'https://drive.google.com/uc?export=download&id=1AhFMKR2W5L6s4urogule5IghbM49vx6r',
      PE: 'https://drive.google.com/uc?export=download&id=1vgFoMhCpYyHIXFtyGDYGwIHffrVQADCc',
      SocialStudies: 'https://drive.google.com/uc?export=download&id=1Dozccxec3jrNR99vcmtra0HLrD1aBVVF',      
    },
  };

  return (
    <AssignmentsContainer>

      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <ButtonContainer>
            <SeeAssignmentsButton onClick={handleToggleAssignments}>
              {showAssignments ? 'Hide Assignments' : 'See Assignments'}
            </SeeAssignmentsButton>
            <StudentAssignmentsButton onClick={handleNavigateToStudentAssignments}>
              Students Assignments Submitted
            </StudentAssignmentsButton>
            <DownloadButton onClick={handleToggleGrades}>
              {showGrades ? 'Hide All Notes' : 'Download All Notes'}
            </DownloadButton>
          </ButtonContainer>
          {showGrades && (
            <GradeList>
              {Object.keys(gradeSubjectLinks).map(grade => (
                <GradeItem key={grade} onClick={() => handleGradeClick(grade)}>
                  {grade}
                </GradeItem>
              ))}
            </GradeList>
          )}
          {selectedGrade && (
            <SubjectList>
              {Object.keys(gradeSubjectLinks[selectedGrade]).map(subject => (
                <SubjectItem key={subject}>
                  {subject}
                  <NoteLink href={gradeSubjectLinks[selectedGrade][subject]} >Download Notes</NoteLink>
                </SubjectItem>
              ))}
            </SubjectList>
          )}
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="date"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AssignmentTypeSelect
              value={newAssignment.type}
              onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
            >
              <option value="Essay">Essay</option>
              <option value="Multiple Choice">Multiple Choice</option>
            </AssignmentTypeSelect>
            {newAssignment.type === 'Multiple Choice' && (
              <ChoiceInputContainer>
                {newAssignment.choices.map((choice, index) => (
                  <ChoiceInput
                    key={index}
                    type="text"
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChange={(e) => {
                      const updatedChoices = [...newAssignment.choices];
                      updatedChoices[index] = e.target.value;
                      setNewAssignment({ ...newAssignment, choices: updatedChoices });
                    }}
                  />
                ))}
                <AddChoiceButton onClick={() => setNewAssignment({ ...newAssignment, choices: [...newAssignment.choices, ''] })}>
                  Add Choice
                </AddChoiceButton>
              </ChoiceInputContainer>
            )}
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          {showAssignments && (
            <AssignmentList>
              {assignments.map(assignment => (
                <AssignmentItem key={assignment.id}>
                  <h4>{assignment.title}</h4>
                  <p>{assignment.description}</p>
                  <p><strong>Grade:</strong> {assignment.grade}</p>
                  <p><strong>Deadline:</strong> {new Date(assignment.deadline).toLocaleDateString()}</p>
                  <button onClick={() => handleEditAssignment(assignment)}><FaEdit /></button>
                  <button onClick={() => handleDeleteAssignment(assignment.id)}><FaTrash /></button>
                </AssignmentItem>
              ))}
            </AssignmentList>
          )}
        </AssignmentsContent>
      </Content>
      <ToastContainer />
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
