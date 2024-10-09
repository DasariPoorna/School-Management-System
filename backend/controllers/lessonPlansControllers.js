// controllers/lessonPlansControllers.js
import LessonPlan from '../models/lessonPlansModel.js';
import School from '../models/schoolModel.js';

// Create Lesson Plan
export const createLessonPlan = async (req, res) => {
  const { title, content, class_id } = req.body;

  if (!title || !class_id) {
    return res.status(400).json({ error: 'Title and class ID are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newLessonPlan = await LessonPlan.create({
      title,
      content,
      class_id,
      school_id: req.school_id,
    });
    res.status(201).json(newLessonPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create lesson plan', details: error.message });
  }
};

// Get All Lesson Plans
export const getAllLessonPlans = async (req, res) => {
  try {
    const lessonPlans = await LessonPlan.findAll({ where: { school_id: req.school_id } });
    res.json(lessonPlans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lesson plans', details: error.message });
  }
};

// Get Lesson Plan by ID
export const getLessonPlanById = async (req, res) => {
  const { id } = req.params;

  try {
    const lessonPlan = await LessonPlan.findOne({ where: { id, school_id: req.school_id } });
    if (lessonPlan) {
      res.json(lessonPlan);
    } else {
      res.status(404).json({ error: 'Lesson plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve lesson plan', details: error.message });
  }
};

// Update Lesson Plan
export const updateLessonPlan = async (req, res) => {
  const { id } = req.params;
  const { title, content, class_id } = req.body;

  try {
    const existingLessonPlan = await LessonPlan.findOne({ where: { id, school_id: req.school_id } });
    if (existingLessonPlan) {
      await existingLessonPlan.update({
        title,
        content,
        class_id,
      });
      res.json({ message: 'Lesson plan updated successfully' });
    } else {
      res.status(404).json({ error: 'Lesson plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lesson plan', details: error.message });
  }
};

// Delete Lesson Plan
export const deleteLessonPlan = async (req, res) => {
  const { id } = req.params;

  try {
    const lessonPlan = await LessonPlan.findOne({ where: { id, school_id: req.school_id } });
    if (lessonPlan) {
      await lessonPlan.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Lesson plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete lesson plan', details: error.message });
  }
};
