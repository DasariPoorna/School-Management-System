// controllers/assignmentController.js
import Assignment from '../models/assignmentsModel.js';
import School from '../models/schoolModel.js';

export const createAssignment = async (req, res) => {
  const { title, description, grade, deadline, type, choices } = req.body;

  if (!title || !deadline || !type) {
    return res.status(400).json({ error: 'Title, deadline, and type are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newAssignment = await Assignment.create({
      title,
      description,
      grade,
      deadline,
      type,
      choices, // Use choices directly as an object
      school_id: req.school_id,
    });

    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create assignment', details: error.message });
  }
};


// Update Assignment
export const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const { title, description, grade, deadline, type, choices } = req.body;

  try {
    const existingAssignment = await Assignment.findOne({ where: { id, school_id: req.school_id } });
    if (existingAssignment) {
      await existingAssignment.update({
        title,
        description,
        grade,
        deadline,
        type,
        choices, // Make sure choices are included here
      });
      res.json({ message: 'Assignment updated successfully' });
    } else {
      res.status(404).json({ error: 'Assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update assignment', details: error.message });
  }
};

// Get All Assignments
export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll({ where: { school_id: req.school_id } });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve assignments', details: error.message });
  }
};

// Get Assignment by ID
export const getAssignmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findOne({ where: { id, school_id: req.school_id } });
    if (assignment) {
      res.json(assignment);
    } else {
      res.status(404).json({ error: 'Assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve assignment', details: error.message });
  }
};


// Delete Assignment
export const deleteAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findOne({ where: { id, school_id: req.school_id } });
    if (assignment) {
      await assignment.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete assignment', details: error.message });
  }
};