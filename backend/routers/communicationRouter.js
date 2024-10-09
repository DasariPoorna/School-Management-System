// routes/communicationRoutes.js
import express from 'express';
import {
  createCommunication,
  getAllCommunications,
  getCommunicationById,
  updateCommunication,
  deleteCommunication,
} from '../controllers/communicationControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createCommunication);
router.get('/', auth, getAllCommunications);
router.get('/:id', auth, getCommunicationById);
router.put('/:id', auth, updateCommunication);
router.delete('/:id', auth, deleteCommunication);

export default router;
