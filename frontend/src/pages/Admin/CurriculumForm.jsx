import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import {
  AddCurriculumForm,
  AddCurriculumInput,
  AddCurriculumButton,
  Select,
  SubTopicWrapper,
  AddSubTopicButton
} from '../../styles/CurriculumStyles';

const CurriculumForm = ({ fetchCurriculums, classes, teachers }) => {
  const [newCurriculum, setNewCurriculum] = useState({
    section: '',
    grade: '',
    subject: '',
    lesson: '',
    topic: '',
    subTopics: [''],
    teacherId: '',
    timetable: '',
    class_id: '',
  });

  const subjects = ['Mathematics', 'Science', 'English', 'Kiswahili', 'History'];

  const handleAddCurriculum = async (e) => {
    e.preventDefault();
    const { section, grade, subject, lesson, topic, subTopics, teacherId, timetable, class_id } = newCurriculum;

    if (subject && topic && subTopics.length > 0 && teacherId && timetable && class_id) {
      try {
        const response = await axios.post('https://zawadi-project.onrender.com/api/curriculum-entries', {
          section,
          grade,
          subject,
          lesson,
          topic,
          subTopics,
          teacherId,
          timetable,
          class_id,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        fetchCurriculums();
        setNewCurriculum({
          section: '',
          grade: '',
          subject: '',
          lesson: '',
          topic: '',
          subTopics: [''],
          teacherId: '',
          timetable: '',
          class_id: '',
        });
        toast.success('Curriculum added successfully', { autoClose: 2000 });
      } catch (error) {
        console.error('Error adding curriculum:', error.response?.data || error.message);
        toast.error('Failed to add curriculum');
      }
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleAddSubTopic = () => {
    setNewCurriculum((prev) => ({
      ...prev,
      subTopics: [...prev.subTopics, ''],
    }));
  };

  const handleSubTopicChange = (index, value) => {
    const updatedSubTopics = [...newCurriculum.subTopics];
    updatedSubTopics[index] = value;
    setNewCurriculum((prev) => ({
      ...prev,
      subTopics: updatedSubTopics,
    }));
  };

  return (
    <AddCurriculumForm onSubmit={handleAddCurriculum}>
      <AddCurriculumInput
        type="text"
        placeholder="Enter section (optional)"
        value={newCurriculum.section}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, section: e.target.value })}
      />
      <Select
        value={newCurriculum.grade}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, grade: e.target.value })}
        required
      >
        <option value="" disabled>Select grade</option>
        {classes.map((classItem) => (
          <option key={classItem.id} value={classItem.id}>
            {classItem.grade}
          </option>
        ))}
      </Select>
      <Select
        value={newCurriculum.subject}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, subject: e.target.value })}
        required
      >
        <option value="" disabled>Select subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </Select>
      <AddCurriculumInput
        type="text"
        placeholder="Enter lesson (optional)"
        value={newCurriculum.lesson}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, lesson: e.target.value })}
      />
      <AddCurriculumInput
        type="text"
        placeholder="Enter topic"
        value={newCurriculum.topic}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, topic: e.target.value })}
        required
      />
      <SubTopicWrapper>
        {newCurriculum.subTopics.map((subTopic, index) => (
          <AddCurriculumInput
            key={index}
            type="text"
            placeholder={`Enter sub-topic ${index + 1}`}
            value={subTopic}
            onChange={(e) => handleSubTopicChange(index, e.target.value)}
            required
          />
        ))}
        <AddSubTopicButton type="button" onClick={handleAddSubTopic}>
          Add Sub-Topic <FaPlus />
        </AddSubTopicButton>
      </SubTopicWrapper>
      <Select
        value={newCurriculum.teacherId}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, teacherId: e.target.value })}
        required
      >
        <option value="">Select Teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </Select>
      <AddCurriculumInput
        type="text"
        placeholder="Enter timetable"
        value={newCurriculum.timetable}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, timetable: e.target.value })}
        required
      />
      <Select
        value={newCurriculum.class_id}
        onChange={(e) => setNewCurriculum({ ...newCurriculum, class_id: e.target.value })}
        required
      >
        <option value="">Select Class</option>
        {classes.map((classItem) => (
          <option key={classItem.id} value={classItem.id}>
            {classItem.grade}
          </option>
        ))}
      </Select>
      <AddCurriculumButton type="submit">Add Curriculum</AddCurriculumButton>
    </AddCurriculumForm>
  );
};

export default CurriculumForm;
