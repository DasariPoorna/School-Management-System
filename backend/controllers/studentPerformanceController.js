import StudentPerformance from '../models/studentPerformanceModel.js';
import Student from '../models/studentModel.js';
import Class from '../models/classModel.js';
import Subject from '../models/subjectModel.js';
import PerformanceLevel from '../models/performanceLevelModel.js';
import School from '../models/schoolModel.js';

// Create a new student performance entry
export const createStudentPerformance = async (req, res) => {
  const { studentId, gradeId, subjects } = req.body;
  const { school_id } = req; // Extract school_id from request object

  if (!school_id) {
    return res.status(400).json({ error: 'school_id is required' });
  }

  try {
    const school = await School.findByPk(school_id);
    if (!school) {
      return res.status(404).json({ error: `School not found for school_id: ${school_id}` });
    }

    const createdEntries = [];
    for (const subject of subjects) {
      const { subject: subjectId, performanceLevel, feedback } = subject;
      const entry = await StudentPerformance.create({
        student_id: studentId,
        grade_id: gradeId,
        subject_id: subjectId,
        performance_level_id: performanceLevel,
        feedback,
        school_id, // Use the school_id from the token
      });
      createdEntries.push(entry);
    }

    res.status(201).json(createdEntries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student performance', details: error.message });
  }
};

// Get All Student Performances
export const getAllStudentPerformances = async (req, res) => {
  try {
    const performances = await StudentPerformance.findAll({
      include: [Student, Class, Subject, PerformanceLevel, School],
    });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performances', details: error.message });
  }
};

// Get Student Performance by ID
export const getStudentPerformanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await StudentPerformance.findOne({
      where: { id },
      include: [Student, Class, Subject, PerformanceLevel, School],
    });
    if (performance) {
      res.json(performance);
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performance', details: error.message });
  }
};

// Update Student Performance
export const updateStudentPerformance = async (req, res) => {
  const { id } = req.params;
  const { studentId, gradeId, subjects, schoolId } = req.body;

  try {
    const performance = await StudentPerformance.findOne({ where: { id } });
    if (performance) {
      await performance.update({ student_id: studentId, grade_id: gradeId, subjects, school_id: schoolId });
      res.json({ message: 'Student performance updated successfully' });
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student performance', details: error.message });
  }
};

// Delete Student Performance
export const deleteStudentPerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await StudentPerformance.findOne({ where: { id } });
    if (performance) {
      await performance.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student performance', details: error.message });
  }
};
