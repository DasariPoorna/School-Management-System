// routes/timetableRoutes.js
import express from 'express';
import {
  createTimetable,
  getAllTimetables,
  getTimetableById,
  updateTimetable,
  deleteTimetable,
} from '../controllers/timetableControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createTimetable);
router.get('/', auth, getAllTimetables);
router.get('/:id', auth, getTimetableById);
router.put('/:id', auth, updateTimetable);
router.delete('/:id', auth, deleteTimetable);

export default router;
