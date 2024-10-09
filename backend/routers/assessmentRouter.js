import express from 'express';
import {
  createAssessment,
  getAllAssessments,
  getAssessmentById,
  updateAssessment,
  deleteAssessment,
} from '../controllers/assessmentController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// // Middleware to get school_id and teacher_id from request (assuming JWT authentication is used)
// router.use((req, res, next) => {
//   req.school_id = req.user.school_id; // Assuming school_id is stored in the JWT
//   req.teacher_id = req.user.teacher_id; // Assuming teacher_id is stored in the JWT
//   next();
// });

router.post('/',auth, createAssessment);
router.get('/',auth, getAllAssessments);
router.get('/:id',auth , getAssessmentById);
router.put('/:id',auth , updateAssessment);
router.delete('/:id',auth , deleteAssessment);

export default router;
