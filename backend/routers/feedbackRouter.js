import express from 'express';
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from '../controllers/feedbackControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createFeedback);
router.get('/', auth, getAllFeedbacks);
router.get('/:id', auth, getFeedbackById);
router.put('/:id', auth, updateFeedback);
router.delete('/:id', auth, deleteFeedback);

export default router;
