import Contact from '../models/contactModel.js';

// Create new contact
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });
    res.status(201).json({ success: true, contact: newContact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};

// Delete a contact by ID
export const deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    await contact.destroy();
    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};
