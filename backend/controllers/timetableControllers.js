// controllers/timetableControllers.js
import Timetable from '../models/timetableModel.js';
import Class from '../models/classModel.js';
import School from '../models/schoolModel.js';

// Create Timetable
export const createTimetable = async (req, res) => {
  const { class_id, day, subject, time } = req.body;

  if (!class_id || !day || !subject || !time) {
    return res.status(400).json({ error: 'Class ID, day, subject, and time are required fields' });
  }

  try {
    const classExists = await Class.findOne({
      where: { id: class_id, school_id: req.school_id },
    });

    if (!classExists) {
      return res.status(404).json({ error: 'Class not found' });
    }

    const newTimetable = await Timetable.create({
      class_id,
      day,
      subject,
      time,
      school_id: req.school_id,
    });
    res.status(201).json(newTimetable);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create timetable', details: error.message });
  }
};

// Get All Timetables
export const getAllTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.findAll({
      where: { school_id: req.school_id },
      include: [{
        model: Class,
        where: { school_id: req.school_id },
      }],
    });
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve timetables', details: error.message });
  }
};

// Get Timetable by ID
export const getTimetableById = async (req, res) => {
  const { id } = req.params;

  try {
    const timetable = await Timetable.findOne({
      where: { id, school_id: req.school_id },
      include: [{
        model: Class,
        where: { school_id: req.school_id },
      }],
    });

    if (timetable) {
      res.json(timetable);
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve timetable', details: error.message });
  }
};

// Update Timetable
export const updateTimetable = async (req, res) => {
  const { id } = req.params;
  const { class_id, day, subject, time } = req.body;

  try {
    const existingTimetable = await Timetable.findOne({
      where: { id, school_id: req.school_id },
      include: [{
        model: Class,
        where: { school_id: req.school_id },
      }],
    });

    if (existingTimetable) {
      await existingTimetable.update({
        class_id,
        day,
        subject,
        time,
      });
      res.json({ message: 'Timetable updated successfully' });
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update timetable', details: error.message });
  }
};

// Delete Timetable
export const deleteTimetable = async (req, res) => {
  const { id } = req.params;

  try {
    const timetable = await Timetable.findOne({
      where: { id, school_id: req.school_id },
      include: [{
        model: Class,
        where: { school_id: req.school_id },
      }],
    });

    if (timetable) {
      await timetable.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete timetable' });
  }
};
