import express from 'express';
import {
  createPerformance,
  getAllPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
  getOverallPerformanceSummary,
  getIndividualStudentPerformance,
  getSubjectWisePerformance,
  getPerformanceTrends,
  getRecommendations,
} from '../controllers/performanceControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPerformance);
router.get('/', auth, getAllPerformances);
router.get('/summary', auth, getOverallPerformanceSummary);
router.get('/student/:student_id', auth, getIndividualStudentPerformance);
router.get('/subject-wise', auth, getSubjectWisePerformance);
router.get('/trends', auth, getPerformanceTrends);
router.get('/recommendations', auth, getRecommendations);
router.get('/:id', auth, getPerformanceById);
router.put('/:id', auth, updatePerformance);
router.delete('/:id', auth, deletePerformance);

export default router;
