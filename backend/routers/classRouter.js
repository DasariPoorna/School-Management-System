// routes/classRoutes.js
import express from 'express';
import {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
} from '../controllers/classControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createClass);
router.get('/', auth, getAllClasses);
router.get('/:id', auth, getClassById);
router.put('/:id', auth, updateClass);
router.delete('/:id', auth, deleteClass);

export default router;
