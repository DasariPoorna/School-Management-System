import express from 'express';
import {
  registerSuperAdmin,
  login,
  createAdmin,
  createTeacher,
  createParent,
  getAdminProfile,
  getTeacherProfile, // Add this
  getParentProfile,  // Add this
} from '../controllers/userControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/register-super-admin', registerSuperAdmin);
router.post('/login', login);

router.post('/create-admin', createAdmin);
router.post('/create-teacher', createTeacher);
router.post('/create-parent', createParent);

router.get('/admin/profile', auth, getAdminProfile);
router.get('/teacher/profile', auth, getTeacherProfile); // Add this
router.get('/parent/profile', auth, getParentProfile);  // Add this



export default router;
