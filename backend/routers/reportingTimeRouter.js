import express from 'express';
import { createReport, getReports, updateReport, deleteReport  } from 
'../controllers/reportingTimeController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/',auth , createReport);
router.get('/',auth , getReports);
router.put('/:id',auth , updateReport);
router.delete('/:id',auth , deleteReport);

export default router;
 