import express from 'express';
import { getDataForSchool } from '../controllers/dataController.js';

const router = express.Router();

router.get('/school', getDataForSchool);

export default router;
