import express from 'express';
import {
  createStudentPerformance,
  getAllStudentPerformances,
  getStudentPerformanceById,
  updateStudentPerformance,
  deleteStudentPerformance
} from '../controllers/studentPerformanceController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/',auth, createStudentPerformance);
router.get('/',auth, getAllStudentPerformances);
router.get('/:id',auth,  getStudentPerformanceById);
router.put('/:id',auth, updateStudentPerformance);
router.delete('/:id',auth, deleteStudentPerformance);

export default router;
