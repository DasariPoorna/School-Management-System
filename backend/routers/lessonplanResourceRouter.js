// routes/lessonPlanResourceRoutes.js
import express from 'express';
import { uploadResource, getResourcesByLessonPlan } from '../controllers/lessonPlanResourceController.js';

const router = express.Router();

// Route to upload a resource
router.post('/upload', uploadResource);

// Route to get all resources for a specific lesson plan
router.get('/:lessonPlanId', getResourcesByLessonPlan);

export default router;

