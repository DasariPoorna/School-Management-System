import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import {
  AddAssessmentForm,
  AddAssessmentInput,
  AddAssessmentTextArea,
  AddAssessmentButton,
  AssessmentTypeSelect,
  AddChoiceButton,
  ChoiceInputContainer,
  ChoiceInput,
} from '../../styles/SuperAssessments.js'; // Import the same styles

const LOCAL_STORAGE_KEY = 'summativeAssessments';
const DATA_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes

const AddSummativeAssessment = () => {
  const [newAssessment, setNewAssessment] = useState({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });

  useEffect(() => {
    // Check if data exists in local storage and is still valid
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData && (Date.now() - storedData.timestamp < DATA_EXPIRATION_TIME)) {
      // Use the stored data
      setNewAssessment(storedData.data);
    } else {
      // Fetch data from backend if not valid or not present
      fetchAssessments();
    }
  }, []);

  const fetchAssessments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/summative-assessments');
      // Store data in local storage with timestamp
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ data: response.data, timestamp: Date.now() }));
      // Optionally handle response data here
    } catch (error) {
      console.error('Error fetching assessments:', error);
    }
  };

  const handleAddAssessment = async (e) => {
    e.preventDefault();
    if (newAssessment.title && newAssessment.description && newAssessment.grade && newAssessment.deadline) {
      try {
        const response = await axios.post('http://localhost:5000/api/summative-assessments', newAssessment);
        toast.success('Summative assessment added successfully');
        // Update local storage after adding assessment
        fetchAssessments(); // Refresh data after adding
      } catch (error) {
        console.error('Error adding summative assessment:', error);
        toast.error('Failed to add summative assessment');
      }
    } else {
      toast.warning('Please fill in all fields');
    }
  };

  const handleAddChoice = () => {
    const newChoiceLabel = String.fromCharCode(65 + newAssessment.choices.length);
    setNewAssessment({
      ...newAssessment,
      choices: [...newAssessment.choices, { label: newChoiceLabel, text: '' }]
    });
  };

  const handleChoiceTextChange = (index, text) => {
    const updatedChoices = [...newAssessment.choices];
    updatedChoices[index].text = text;
    setNewAssessment({ ...newAssessment, choices: updatedChoices });
  };

  return (
    <AddAssessmentForm onSubmit={handleAddAssessment}>
      <AddAssessmentInput
        type="text"
        placeholder="Enter assessment title"
        value={newAssessment.title}
        onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })}
      />
      <AddAssessmentTextArea
        placeholder="Enter assessment description"
        value={newAssessment.description}
        onChange={(e) => setNewAssessment({ ...newAssessment, description: e.target.value })}
      />
      <AddAssessmentInput
        type="text"
        placeholder="Enter assessment grade"
        value={newAssessment.grade}
        onChange={(e) => setNewAssessment({ ...newAssessment, grade: e.target.value })}
      />
      <AddAssessmentInput
        type="date"
        placeholder="Enter assessment deadline"
        value={newAssessment.deadline}
        onChange={(e) => setNewAssessment({ ...newAssessment, deadline: e.target.value })}
      />
      <AssessmentTypeSelect
        value={newAssessment.type}
        onChange={(e) => setNewAssessment({ ...newAssessment, type: e.target.value })}
      >
        <option value="Essay">Essay</option>
        <option value="Multiple Choice">Multiple Choice</option>
      </AssessmentTypeSelect>
      {newAssessment.type === 'Multiple Choice' && (
        <>
          <AddChoiceButton type="button" onClick={handleAddChoice}>
            +add the choices
          </AddChoiceButton>
          {newAssessment.choices.map((choice, index) => (
            <ChoiceInputContainer key={index}>
              <span>{choice.label}</span>
              <ChoiceInput
                type="text"
                value={choice.text}
                onChange={(e) => handleChoiceTextChange(index, e.target.value)}
              />
            </ChoiceInputContainer>
          ))}
        </>
      )}
      <AddAssessmentButton type="submit">Add Summative Assessment</AddAssessmentButton>
      <ToastContainer />
    </AddAssessmentForm>
  );
};

export default AddSummativeAssessment;
