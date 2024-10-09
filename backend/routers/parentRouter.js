// routes/parentRoutes.js (or another relevant file)
import express from 'express';
import auth from '../middleware/auth.js'; // Import the auth middleware
import { getParentStudents } from '../controllers/userControllers.js'; // Import the controller function

const router = express.Router();

// Route to get linked students for a parent
router.get('/parent/students', auth, getParentStudents);

export default router;
