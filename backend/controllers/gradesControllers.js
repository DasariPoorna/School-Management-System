// controllers/gradesController.js
import Grade from '../models/gradesModel.js';
import Student from '../models/studentModel.js';

// Create Grade
export const createGrade = async (req, res) => {
  const { student_id, subject, grade, performance_level } = req.body;

  if (!student_id || !subject || !grade) {
    return res.status(400).json({ error: 'Student ID, subject, and grade are required fields' });
  }

  try {
    const newGrade = await Grade.create({
      student_id,
      subject,
      grade,
      performance_level,
      school_id: req.school_id,
    });
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create grade', details: error.message });
  }
};


export const getAllGrades = async (req, res) => {
  try {
    // Check if the request is from a parent
    if (req.user.role === 'parent') {
      // Find all grades for all students linked to the parent
      const grades = await Grade.findAll({
        where: {
          student_id: req.user.studentIds, // Find grades for all linked students
          school_id: req.user.school_id,
        },
      });

      // If no grades are found, return a 404 error
      if (!grades || grades.length === 0) {
        return res.status(404).json({ error: 'No grades found for the linked students.' });
      }

      res.json(grades);
    } else {
      // For other roles, return all grades in the school
      const grades = await Grade.findAll({ where: { school_id: req.user.school_id } });
      res.json(grades);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve grades', details: error.message });
  }
};


export const getGradeById = async (req, res) => {
  const { id } = req.params;

  try {
    const grade = await Grade.findOne({ where: { grade_id: id, school_id: req.user.school_id } });

    if (!grade) {
      return res.status(404).json({ error: 'Grade not found' });
    }

    if (req.user.role === 'parent' && !req.user.studentIds.includes(grade.student_id)) {
      return res.status(403).json({ error: 'Access denied. You are not linked to this student.' });
    }

    res.json(grade);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve grade', details: error.message });
  }
};



// Update Grade
export const updateGrade = async (req, res) => {
  const { id } = req.params;
  const { student_id, subject, grade, performance_level } = req.body;

  try {
    const existingGrade = await Grade.findOne({ where: { grade_id: id, school_id: req.school_id } });
    if (existingGrade) {
      await existingGrade.update({
        student_id,
        subject,
        grade,
        performance_level,
      });
      res.json({ message: 'Grade updated successfully' });
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update grade', details: error.message });
  }
};

// Delete Grade
export const deleteGrade = async (req, res) => {
  const { id } = req.params;

  try {
    const grade = await Grade.findOne({ where: { grade_id: id, school_id: req.school_id } });
    if (grade) {
      await grade.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete grade', details: error.message });
  }
};