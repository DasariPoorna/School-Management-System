import express from 'express';
import { 
  createAssessment, 
  getAllAssessments, 
  updateAssessment, 
  deleteAssessment 
} from '../controllers/allassessmentController.js';

const router = express.Router();

// Create a new assessment with rubric details (POST)
router.post('/', createAssessment);

// Get all assessments (GET)
router.get('/', getAllAssessments);

// Update an assessment by ID (PUT)
router.put('/:id', updateAssessment);

// Delete an assessment by ID (DELETE)
router.delete('/:id', deleteAssessment);

export default router;
