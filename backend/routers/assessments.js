// routes/assessments.js
import express from 'express';
import { superCreateAssessment, 
    superGetAllAssessments,
    superGetAssessmentById, 
    superDeleteAssessment, 
    superUpdateAssessment 
} from '../controllers/assessmentController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/',auth, superCreateAssessment);
router.get('/',auth, superGetAllAssessments);
router.get('/:id', superGetAssessmentById);
router.delete('/:id', superDeleteAssessment); 
router.put('/:id', superUpdateAssessment);

export default router;
