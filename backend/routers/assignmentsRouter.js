// routes/assignmentRoutes.js
import express from 'express';
import {
  createAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from '../controllers/assignmentsControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createAssignment);
router.get('/', auth, getAllAssignments);
router.get('/:id', auth, getAssignmentById);
router.put('/:id', auth, updateAssignment);
router.delete('/:id', auth, deleteAssignment);

export default router;
