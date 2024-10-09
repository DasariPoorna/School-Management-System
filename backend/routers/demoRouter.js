import express from 'express';
import { createDemoRequest, getAllDemos, deleteDemoById } from '../controllers/demoControllers.js';

const router = express.Router();

// POST request to submit demo request
router.post('/', createDemoRequest);

// GET request to fetch all demo requests
router.get('/', getAllDemos);

// DELETE request to remove a specific demo request by ID
router.delete('/:id', deleteDemoById);

export default router;
