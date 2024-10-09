import express from 'express';
import {
  createFormativeAssessment,
  createSummativeAssessment,
  getAllFormativeAssessments,
  getAllSummativeAssessments,
} from '../controllers/enteredMarksControllers.js'
import auth from '../middleware/auth.js';

const router = express.Router();

// Formative Assessments
router.post('/formative', auth, createFormativeAssessment);
router.get('/formative', auth, getAllFormativeAssessments);

// Summative Assessments
router.post('/summative', auth, createSummativeAssessment);
router.get('/summative', auth, getAllSummativeAssessments);

export default router
