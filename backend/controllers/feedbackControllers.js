import Feedback from '../models/feedbackModel.js';
import Student from '../models/studentModel.js';
import School from '../models/schoolModel.js';

// Create Feedback
export const createFeedback = async (req, res) => {
  const { title, content, student_id } = req.body;

  if (!title || !student_id) {
    return res.status(400).json({ error: 'Title and student ID are required' });
  }

  try {
    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const newFeedback = await Feedback.create({
      title,
      content,
      student_id,
      school_id: req.school_id,
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create feedback', details: error.message });
  }
};

// Get All Feedbacks
export const getAllFeedbacks = async (req, res) => {
  const { school_id, student_id } = req.query;

  try {
    const feedbacks = await Feedback.findAll({ 
      where: { school_id, student_id }
    });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedbacks' });
  }
};

// Get Feedback by ID
export const getFeedbackById = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await Feedback.findOne({
      where: { feedback_id: id, school_id: req.school_id }
    });
    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedback' });
  }
};

// Update Feedback
export const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { title, content, student_id } = req.body;

  try {
    const feedback = await Feedback.findOne({
      where: { feedback_id: id, school_id: req.school_id }
    });

    if (feedback) {
      await feedback.update({ title, content, student_id });
      res.json({ message: 'Feedback updated successfully' });
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update feedback', details: error.message });
  }
};

// Delete Feedback
export const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await Feedback.findOne({
      where: { feedback_id: id, school_id: req.school_id }
    });
    if (feedback) {
      await feedback.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete feedback', details: error.message });
  }
};
