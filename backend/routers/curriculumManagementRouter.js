// routes/curriculumManagementRoutes.js
import express from 'express';
import {
  createCurriculumEntry,
  getAllCurriculumEntries,
  getCurriculumEntryById,
  updateCurriculumEntry,
  deleteCurriculumEntry,
} from '../controllers/curriculumManagementControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createCurriculumEntry);
router.get('/', auth, getAllCurriculumEntries);
router.get('/:id', auth, getCurriculumEntryById);
router.put('/:id', auth, updateCurriculumEntry);
router.delete('/:id', auth, deleteCurriculumEntry);

export default router;
