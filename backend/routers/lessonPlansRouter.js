// routes/lessonPlansRoutes.js
import express from 'express';
import {
  createLessonPlan,
  getAllLessonPlans,
  getLessonPlanById,
  updateLessonPlan,
  deleteLessonPlan,
} from '../controllers/lessonPlansControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createLessonPlan);
router.get('/', auth, getAllLessonPlans);
router.get('/:id', auth, getLessonPlanById);
router.put('/:id', auth, updateLessonPlan);
router.delete('/:id', auth, deleteLessonPlan);

export default router;
