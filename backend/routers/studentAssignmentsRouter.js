import express from 'express';
import {
  createStudentAssignment,
  getAllStudentAssignments,
  getStudentAssignment,
  updateStudentAssignment,
  deleteStudentAssignment,
} from '../controllers/studentAssignmentsControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createStudentAssignment);
router.get('/', auth, getAllStudentAssignments);
router.get('/:studentId/:assignmentId', auth, getStudentAssignment);
router.put('/:studentId/:assignmentId', auth, updateStudentAssignment);
router.delete('/:studentId/:assignmentId', auth, deleteStudentAssignment);

export default router;
