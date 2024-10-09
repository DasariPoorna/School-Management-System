// controllers/announcementController.js
import Announcement from '../models/announcementModel.js';
import School from '../models/schoolModel.js';

export const createAnnouncement = async (req, res) => {
  const { announcement, section } = req.body;

  if (!announcement || !section) {
    return res.status(400).json({ error: 'Announcement and section are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newAnnouncement = await Announcement.create({
      announcement,
      section,
      school_id: req.school_id,
    });
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll({
      where: { school_id: req.school_id },
    });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findOne({
      where: {
        id: req.params.id,
        school_id: req.school_id,
      },
    });
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAnnouncement = async (req, res) => {
  const { announcement, section } = req.body;

  try {
    const existingAnnouncement = await Announcement.findOne({
      where: {
        id: req.params.id,
        school_id: req.school_id,
      },
    });
    if (!existingAnnouncement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    existingAnnouncement.announcement = announcement || existingAnnouncement.announcement;
    existingAnnouncement.section = section || existingAnnouncement.section;
    await existingAnnouncement.save();

    res.status(200).json(existingAnnouncement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findOne({
      where: {
        id: req.params.id,
        school_id: req.school_id,
      },
    });
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }
    await announcement.destroy();
    res.status(204).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
