// routes/learningMaterialsRoutes.js
import express from 'express';
import {
  createLearningMaterial,
  getAllLearningMaterials,
  getLearningMaterialById,
  updateLearningMaterial,
  deleteLearningMaterial,
} from '../controllers/learningMaterialsControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createLearningMaterial);
router.get('/', auth, getAllLearningMaterials);
router.get('/:id', auth, getLearningMaterialById);
router.put('/:id', auth, updateLearningMaterial);
router.delete('/:id', auth, deleteLearningMaterial);

export default router;
