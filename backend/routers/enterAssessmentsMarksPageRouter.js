<<<<<<< HEAD
import express from 'express';
import { createAssessment, getStudentsByClass } from '../controllers/teacherController.js';

const router = express.Router();

router.get('/students/:class_id', getStudentsByClass);
router.post('/', createAssessment);

export default router;

=======
import express from 'express';
import { createAssessment, getStudentsByClass } from '../controllers/teacherController.js';

const router = express.Router();

router.get('/students/:class_id', getStudentsByClass);
router.post('/', createAssessment);

export default router;

>>>>>>> 1c443e752ac31b50c05df7a089a2440768578d46
