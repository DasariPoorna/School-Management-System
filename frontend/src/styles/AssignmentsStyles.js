import styled from 'styled-components';

export const AssignmentsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const AssignmentsContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AssignmentsHeader = styled.h2`
  margin-bottom: 20px;
`;

export const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AssignmentItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  & > strong {
    margin-right: 10px;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const AddAssignmentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddAssignmentInput = styled.input`
  width: calc(100% - 20px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const AddAssignmentTextArea = styled.textarea`
  width: calc(100% - 20px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const AddAssignmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AssignmentTypeSelect = styled.select`
  width: calc(100% - 20px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const AddChoiceButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #218838;
  }
`;

export const ChoiceInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ChoiceInput = styled.input`
  flex: 1;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SeeAssignmentsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StudentAssignmentsButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const DownloadButton = styled.button`
  background-color: #ff8800;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc6e00;
  }
`;

export const GradeList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const GradeItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #f8f9fa;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const SubjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const SubjectItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const NoteLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const GoBackButton = styled.button`
  background-color: #ff8800;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc6e00;
  }
`;





// New styles for StudentAssignments component


// export const AssignmentsContainer = styled.div`
//   display: flex;
//   background-color: #f0f2f5;
//   height: 100vh;
// `;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #ddd;
`;

// export const Content = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

export const AssignmentCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* For absolute positioning of the type label */
`;

export const AssignmentTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const AssignmentDescription = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
`;

export const AssignmentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const AssignmentButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MultipleChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const MultipleChoiceOption = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
`;

export const RadioLabel = styled.label`
  font-size: 1em;
`;

export const AssignmentTypeLabel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => (props.type === 'Essay' ? '#007bff' : '#ffc107')};
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
`;

export const TextAreaContainer = styled.div`
  margin-top: 15px;
`;
