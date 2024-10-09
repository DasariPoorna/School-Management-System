import express from 'express';
import { createContact, getAllContacts, deleteContactById } from '../controllers/contactControllers.js';


const router = express.Router();

// POST request to submit contact form
router.post('/', createContact);

// GET request to fetch all contact messages
router.get('/', getAllContacts);

// DELETE request to remove a specific contact message by ID
router.delete('/:id', deleteContactById);

export default router;
