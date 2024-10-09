import Demo from '../models/demoModel.js';

// Create new demo request
export const createDemoRequest = async (req, res) => {
  try {
    const { name, email, phone, schoolName, message } = req.body;
    const newDemo = await Demo.create({
      name,
      email,
      phone,
      schoolName,
      message,
    });
    res.status(201).json({ success: true, demo: newDemo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};

// Get all demo requests
export const getAllDemos = async (req, res) => {
  try {
    const demos = await Demo.findAll();
    res.status(200).json({ success: true, demos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};

// Delete a demo request by ID
export const deleteDemoById = async (req, res) => {
  try {
    const { id } = req.params;
    const demo = await Demo.findByPk(id);
    if (!demo) {
      return res.status(404).json({ success: false, message: 'Demo request not found' });
    }
    await demo.destroy();
    res.status(200).json({ success: true, message: 'Demo request deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
  }
};
