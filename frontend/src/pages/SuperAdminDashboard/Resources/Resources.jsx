import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SuperLessonPlans from './LessonPlans';
import SuperNotes from './Notes';
import SuperAssessments from './Assessments';
import SuperTimetable from './Timetable';

const Resources = () => {
  return (
    <Routes>
      <Route path="lesson-plans" element={<SuperLessonPlans />} />
      <Route path="notes" element={<SuperNotes />} />
      <Route path="assessments" element={<SuperAssessments />} />
      <Route path="timetable" element={<SuperTimetable />} />
    </Routes>
  );
};

export default Resources;
