// routes/progressRoutes.js
import express from 'express';
import {
  createProgress,
  getAllProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
} from '../controllers/progressControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createProgress);
router.get('/', auth, getAllProgress);
router.get('/:id', auth, getProgressById);
router.put('/:id', auth, updateProgress);
router.delete('/:id', auth, deleteProgress);

export default router;
