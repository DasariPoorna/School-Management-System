// controllers/teachersControllers.js
import Teacher from '../models/teachersModel.js';
import School from '../models/schoolModel.js';

// Create Teacher
export const createTeacher = async (req, res) => {
  const { name, email, phone, address, qualification, subject, experience, performance } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newTeacher = await Teacher.create({
      name,
      email,
      phone,
      address,
      qualification,
      subject,
      experience,
      performance,
      school_id: req.school_id,
    });
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create teacher', details: error.message });
  }
};

// Get All Teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({ where: { school_id: req.school_id } });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve teachers', details: error.message });
  }
};

// Get Teacher by ID
export const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findOne({
      where: { id, school_id: req.school_id },
    });
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve teacher data', details: error.message });
  }
};

// Update Teacher
export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, qualification, subject, experience, performance } = req.body;

  try {
    const existingTeacher = await Teacher.findOne({
      where: { id, school_id: req.school_id },
    });
    if (existingTeacher) {
      await existingTeacher.update({
        name,
        email,
        phone,
        address,
        qualification,
        subject,
        experience,
        performance,
      });
      res.json({ message: 'Teacher updated successfully' });
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teacher data', details: error.message });
  }
};

// Delete Teacher
export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findOne({
      where: { id, school_id: req.school_id },
    });
    if (teacher) {
      await teacher.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete teacher data', details: error.message });
  }
};
