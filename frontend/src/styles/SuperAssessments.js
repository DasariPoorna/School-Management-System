import styled from 'styled-components';


export const AddAssessmentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const AddAssessmentInput = styled.input`
  padding: 10px;
  font-size: 1.1em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const AddAssessmentTextArea = styled.textarea`
  padding: 10px;
  font-size: 1.1em;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;

export const AddAssessmentButton = styled.button`
  padding: 12px 20px;
  font-size: 1.1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AssessmentTypeSelect = styled.select`
  padding: 10px;
  font-size: 1.1em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const AddChoiceButton = styled.button`
  padding: 10px;
  font-size: 1.1em;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const ChoiceInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChoiceInput = styled.input`
  padding: 10px;
  font-size: 1.1em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
