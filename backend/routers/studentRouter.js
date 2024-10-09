// routes/studentRoutes.js
import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from '../controllers/studentControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createStudent);
router.get('/', auth, getAllStudents);
router.get('/:id', auth, getStudentById);
router.put('/:id', auth, updateStudent);
router.delete('/:id', auth, deleteStudent);



export default router;
