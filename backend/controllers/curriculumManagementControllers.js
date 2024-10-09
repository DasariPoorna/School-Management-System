// controllers/curriculumManagementController.js
import CurriculumEntry from '../models/curriculumManagementModel.js';
import School from '../models/schoolModel.js';

// Create Curriculum Entry
export const createCurriculumEntry = async (req, res) => {
  const { section, grade, subject, lesson, timetable, subTopics } = req.body;

  if (!section || !grade || !subject) {
    return res.status(400).json({ error: 'Section, grade, and subject are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newCurriculumEntry = await CurriculumEntry.create({
      section,
      grade,
      subject,
      lesson,
      timetable,
      subTopics, // Handle subTopics
      school_id: req.school_id,
    });
    res.status(201).json(newCurriculumEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create curriculum entry', details: error.message });
  }
};

// Get All Curriculum Entries
export const getAllCurriculumEntries = async (req, res) => {
  try {
    const curriculumEntries = await CurriculumEntry.findAll({ where: { school_id: req.school_id } });
    res.json(curriculumEntries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve curriculum entries', details: error.message });
  }
};

// Get Curriculum Entry by ID
export const getCurriculumEntryById = async (req, res) => {
  const { id } = req.params;

  try {
    const curriculumEntry = await CurriculumEntry.findOne({ where: { id, school_id: req.school_id } });
    if (curriculumEntry) {
      res.json(curriculumEntry);
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve curriculum entry', details: error.message });
  }
};

// Update Curriculum Entry
export const updateCurriculumEntry = async (req, res) => {
  const { id } = req.params;
  const { section, grade, subject, lesson, timetable, subTopics } = req.body;

  try {
    const existingCurriculumEntry = await CurriculumEntry.findOne({ where: { id, school_id: req.school_id } });
    if (existingCurriculumEntry) {
      await existingCurriculumEntry.update({
        section,
        grade,
        subject,
        lesson,
        timetable,
        subTopics, // Handle subTopics
      });
      res.json({ message: 'Curriculum entry updated successfully' });
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status500().json({ error: 'Failed to update curriculum entry', details: error.message });
  }
};

// Delete Curriculum Entry
export const deleteCurriculumEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const curriculumEntry = await CurriculumEntry.findOne({ where: { id, school_id: req.school_id } });
    if (curriculumEntry) {
      await curriculumEntry.destroy();
      res.status(204).end(); 
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete curriculum entry', details: error.message });
  }
};
