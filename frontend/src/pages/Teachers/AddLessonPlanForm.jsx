import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AddLessonPlanFormContainer,
  AddLessonPlanInput,
  AddLessonPlanButton,
  Select
} from '../../styles/lessonplansstyles.js';

const AddLessonPlanForm = ({ classes, setLessonPlans, lessonPlans }) => {
  const [newLessonPlan, setNewLessonPlan] = useState({
    title: '',
    content: '',
    class_id: ''
  });

  const handleAddLessonPlan = async (e) => {
    e.preventDefault();
    const { title, content, class_id } = newLessonPlan;

    if (title.trim() !== '' && content.trim() !== '' && class_id !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/lessonplans', newLessonPlan, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setLessonPlans([...lessonPlans, response.data]);
        setNewLessonPlan({
          title: '',
          content: '',
          class_id: ''
        });
        toast.success('Lesson plan added successfully', { autoClose: 2000 });
      } catch (error) {
        console.error('Error adding lesson plan:', error.response?.data || error.message);
        toast.error('Failed to add lesson plan');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <AddLessonPlanFormContainer onSubmit={handleAddLessonPlan}>
      <AddLessonPlanInput
        type="text"
        placeholder="Enter lesson plan title"
        value={newLessonPlan.title}
        onChange={(e) => setNewLessonPlan({ ...newLessonPlan, title: e.target.value })}
      />
      <AddLessonPlanInput
        type="text"
        placeholder="Enter lesson plan content"
        value={newLessonPlan.content}
        onChange={(e) => setNewLessonPlan({ ...newLessonPlan, content: e.target.value })}
      />
      <Select
        value={newLessonPlan.class_id}
        onChange={(e) => setNewLessonPlan({ ...newLessonPlan, class_id: e.target.value })}
      >
        <option value="" disabled>
          Select class
        </option>
        {classes.map((classItem) => (
          <option key={classItem.id} value={classItem.id}>
            {classItem.grade}
          </option>
        ))}
      </Select>
      <AddLessonPlanButton type="submit">Add Lesson Plan</AddLessonPlanButton>
    </AddLessonPlanFormContainer>
  );
};

export default AddLessonPlanForm;
