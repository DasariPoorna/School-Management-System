import FormativeAssessment from '../models/formativeAssessmentModel.js';
import SummativeAssessment from '../models/summativeAssessmentModel.js';
import School from '../models/schoolModel.js';
import Class from '../models/classModel.js';

// Create Formative Assessment
export const createFormativeAssessment = async (req, res) => {
  const { student_id, class_level, admission_number, subject, topic, subtopic, correct_answers, total_answers } = req.body;

  if (!student_id || !class_level || !admission_number || !subject || !topic || !subtopic || correct_answers === undefined || total_answers === undefined) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const selectedClass = await Class.findOne({ where: { id: class_level, school_id: req.school_id } });
    if (!selectedClass) {
      return res.status(404).json({ error: 'Class not found in the school' });
    }

    const newFormativeAssessment = await FormativeAssessment.create({
      student_id,
      class_level: selectedClass.id,
      admission_number,
      subject,
      topic,
      subtopic,
      correct_answers,
      total_answers,
      school_id: req.school_id,
      performance_level: getPerformanceLevel(correct_answers, total_answers),
    });
    res.status(201).json(newFormativeAssessment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create formative assessment', details: error.message });
  }
};

// Create Summative Assessment
export const createSummativeAssessment = async (req, res) => {
  const { student_id, class_level, admission_number, subject, topic, subtopic, correct_answers, total_answers } = req.body;

  if (!student_id || !class_level || !admission_number || !subject || !topic || !subtopic || correct_answers === undefined || total_answers === undefined) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const selectedClass = await Class.findOne({ where: { id: class_level, school_id: req.school_id } });
    if (!selectedClass) {
      return res.status(404).json({ error: 'Class not found in the school' });
    }

    const newSummativeAssessment = await SummativeAssessment.create({
      student_id,
      class_level: selectedClass.id,
      admission_number,
      subject,
      topic,
      subtopic,
      correct_answers,
      total_answers,
      school_id: req.school_id,
      performance_level: getPerformanceLevel(correct_answers, total_answers),
    });
    res.status(201).json(newSummativeAssessment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create summative assessment', details: error.message });
  }
};

// Get All Formative Assessments
export const getAllFormativeAssessments = async (req, res) => {
  try {
    const formativeAssessments = await FormativeAssessment.findAll({ where: { school_id: req.school_id } });
    res.json(formativeAssessments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve formative assessments', details: error.message });
  }
};

// Get All Summative Assessments
export const getAllSummativeAssessments = async (req, res) => {
  try {
    const summativeAssessments = await SummativeAssessment.findAll({ where: { school_id: req.school_id } });
    res.json(summativeAssessments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve summative assessments', details: error.message });
  }
};

// Utility function to determine performance level
const getPerformanceLevel = (correct_answers, total_answers) => {
  const percentage = (correct_answers / total_answers) * 100;
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 75) return 'Meets Expectation';
  if (percentage >= 50) return 'Average';
  return 'Below Average';
};

// Other CRUD operations for specific assessments can be added similarly

