import Class from '../models/classModel.js';
import School from '../models/schoolModel.js';

// Create Class
export const createClass = async (req, res) => {
  const { grade, category } = req.body;

  if (!grade || !category) {
    return res.status(400).json({ error: 'Grade and category are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newClass = await Class.create({ grade, category, school_id: req.school_id });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create class', details: error.message });
  }
};

// Get All Classes
export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll({ where: { school_id: req.school_id } });
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve classes', details: error.message });
  }
};

// Get Class by ID
export const getClassById = async (req, res) => {
  const { id } = req.params;

  try {
    const classInstance = await Class.findOne({ where: { id, school_id: req.school_id } });
    if (classInstance) {
      res.json(classInstance);
    } else {
      res.status(404).json({ error: 'Class not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve class', details: error.message });
  }
};

// Update Class
export const updateClass = async (req, res) => {
  const { id } = req.params;
  const { grade, category } = req.body;

  try {
    const existingClass = await Class.findOne({ where: { id, school_id: req.school_id } });
    if (existingClass) {
      await existingClass.update({ grade, category });
      res.json({ message: 'Class updated successfully' });
    } else {
      res.status(404).json({ error: 'Class not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update class', details: error.message });
  }
};

// Delete Class
export const deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classInstance = await Class.findOne({ where: { id, school_id: req.school_id } });
    if (classInstance) {
      await classInstance.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Class not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete class', details: error.message });
  }
};
