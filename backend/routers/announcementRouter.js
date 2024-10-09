// routers/announcementRouter.js
import express from 'express';
import {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcementControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createAnnouncement);
router.get('/', auth, getAllAnnouncements);
router.get('/:id', auth, getAnnouncementById);
router.put('/:id', auth, updateAnnouncement);
router.delete('/:id', auth, deleteAnnouncement);

export default router;
