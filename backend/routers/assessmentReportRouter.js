// routes/assessmentReportRoutes.js
import express from 'express';
import {
  createAssessmentReport,
  getAllAssessmentReports,
  getAssessmentReportById,
  updateAssessmentReport,
  deleteAssessmentReport,
} from '../controllers/assessmentReportControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createAssessmentReport);
router.get('/', auth, getAllAssessmentReports);
router.get('/:id', auth, getAssessmentReportById);
router.put('/:id', auth, updateAssessmentReport);
router.delete('/:id', auth, deleteAssessmentReport);

export default router;
