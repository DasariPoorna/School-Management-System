import express from 'express';
import {
  createAttendanceRecord,
  getAllAttendanceRecords,
  getAttendanceRecordById,
  updateAttendanceRecord,
  deleteAttendanceRecord,
} from '../controllers/attendanceRecordControllers.js';
import auth, { ensureParentAccessToStudent } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createAttendanceRecord);
router.get('/', auth, getAllAttendanceRecords);
router.get('/:id', auth, ensureParentAccessToStudent, getAttendanceRecordById);
router.put('/:id', auth, updateAttendanceRecord);
router.delete('/:id', auth, deleteAttendanceRecord);

export default router;
