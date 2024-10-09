// controllers/studentControllers.js
import Student from '../models/studentModel.js';
import School from '../models/schoolModel.js';

// Create Student
export const createStudent = async (req, res) => {
  const { name, class_id, registrationNumber, grade, parentName, parentEmail, parentPhone } = req.body;

  if (!name || !class_id) {
    return res.status(400).json({ error: 'Name and class ID are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newStudent = await Student.create({
      name,
      class_id,
      registrationNumber,
      grade,
      parentName,
      parentEmail,
      parentPhone,
      school_id: req.school_id,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student', details: error.message });
  }
};

// Get All Students
export const getAllStudents = async (req, res) => {
  try {
    let students;

    if (req.user.role === 'super-admin') {
      // If the user is a super-admin, get all students
      students = await Student.findAll();
    } else {
      // If the user is tied to a specific school, get students for that school
      students = await Student.findAll({ where: { school_id: req.school_id } });
    }

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students', details: error.message });
  }
};


// Get Student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findOne({
      where: { id, school_id: req.school_id },
    });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student', details: error.message });
  }
};

// Update Student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, class_id, registrationNumber, grade, parentName, parentEmail, parentPhone } = req.body;

  try {
    const existingStudent = await Student.findOne({
      where: { id, school_id: req.school_id },
    });
    if (existingStudent) {
      await existingStudent.update({
        name,
        class_id,
        registrationNumber,
        grade,
        parentName,
        parentEmail,
        parentPhone,
      });
      res.json({ message: 'Student updated successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student', details: error.message });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findOne({
      where: { id, school_id: req.school_id },
    });
    if (student) {
      await student.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student', details: error.message });
  }
};

// Get Students by Class ID (New Method)
export const getStudentsByClass = async (req, res) => {
  const { class_id } = req.query;

  try {
    if (!class_id) {
      return res.status(400).json({ error: 'Class ID is required' });
    }

    const students = await Student.findAll({ where: { class_id, school_id: req.school_id } });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students', details: error.message });
  }
};
