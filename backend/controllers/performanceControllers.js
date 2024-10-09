import Performance from '../models/performanceModel.js';
import School from '../models/schoolModel.js';
import Student from '../models/studentModel.js';
import { Op } from 'sequelize';

// Create Performance
export const createPerformance = async (req, res) => {
  const { student_id, class_id, subject, marks } = req.body;

  if (!student_id || !class_id || !subject || !marks) {
    return res.status(400).json({ error: 'Student ID, class ID, subject, and marks are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newPerformance = await Performance.create({
      student_id,
      class_id,
      subject,
      marks,
      school_id: req.school_id,
    });
    res.status(201).json(newPerformance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create performance record', details: error.message });
  }
};

// Get All Performances
export const getAllPerformances = async (req, res) => {
  try {
    const performances = await Performance.findAll({ where: { school_id: req.school_id } });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve performance records', details: error.message });
  }
};

// Get Performance by ID
export const getPerformanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (performance) {
      res.json(performance);
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve performance record', details: error.message });
  }
};

// Update Performance
export const updatePerformance = async (req, res) => {
  const { id } = req.params;
  const { student_id, class_id, subject, marks } = req.body;

  try {
    const existingPerformance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (existingPerformance) {
      await existingPerformance.update({
        student_id,
        class_id,
        subject,
        marks,
      });
      res.json({ message: 'Performance record updated successfully' });
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update performance record', details: error.message });
  }
};

// Delete Performance
export const deletePerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (performance) {
      await performance.destroy(); 
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete performance record', details: error.message });
  }
};

// Get Overall Performance Summary
export const getOverallPerformanceSummary = async (req, res) => {
  try {
    const performances = await Performance.findAll({
      where: { school_id: req.school_id },
      attributes: [
        [sequelize.fn('AVG', sequelize.col('marks')), 'averageMarks'],
        [sequelize.fn('MAX', sequelize.col('marks')), 'highestMarks'],
        [sequelize.fn('MIN', sequelize.col('marks')), 'lowestMarks'],
      ],
    });
    res.json(performances[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve overall performance summary', details: error.message });
  }
};

// Get Individual Student Performance
export const getIndividualStudentPerformance = async (req, res) => {
  const { student_id } = req.params;
  try {
    const performances = await Performance.findAll({ where: { student_id, school_id: req.school_id } });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve individual student performance', details: error.message });
  }
};

// Get Subject-wise Performance
export const getSubjectWisePerformance = async (req, res) => {
  try {
    const performances = await Performance.findAll({
      where: { school_id: req.school_id },
      attributes: ['subject', [sequelize.fn('AVG', sequelize.col('marks')), 'averageMarks']],
      group: ['subject'],
    });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve subject-wise performance', details: error.message });
  }
};

// Get Performance Trends
export const getPerformanceTrends = async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const performances = await Performance.findAll({
      where: {
        school_id: req.school_id,
        createdAt: { [Op.between]: [new Date(startDate), new Date(endDate)] },
      },
      attributes: [
        [sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%Y-%m'), 'month'],
        [sequelize.fn('AVG', sequelize.col('marks')), 'averageMarks'],
      ],
      group: ['month'],
    });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve performance trends', details: error.message });
  }
};

// Get Recommendations
export const getRecommendations = async (req, res) => {
  try {
    const performances = await Performance.findAll({ where: { school_id: req.school_id } });
    const recommendations = [];

    performances.forEach((performance) => {
      if (performance.marks < 50) {
        recommendations.push({
          student_id: performance.student_id,
          subject: performance.subject,
          recommendation: 'Needs Improvement',
        });
      } else if (performance.marks >= 50 && performance.marks < 75) {
        recommendations.push({
          student_id: performance.student_id,
          subject: performance.subject,
          recommendation: 'Satisfactory',
        });
      } else {
        recommendations.push({
          student_id: performance.student_id,
          subject: performance.subject,
          recommendation: 'Excellent',
        });
      }
    });

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve recommendations', details: error.message });
  }
};
