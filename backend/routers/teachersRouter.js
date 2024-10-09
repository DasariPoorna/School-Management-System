// routes/teacherRoutes.js
import express from 'express';
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teachersControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createTeacher);
router.get('/', auth, getAllTeachers);
router.get('/:id', auth, getTeacherById);
router.put('/:id', auth, updateTeacher);
router.delete('/:id', auth, deleteTeacher);

export default router;
