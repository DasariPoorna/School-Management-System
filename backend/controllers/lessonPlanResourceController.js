// controllers/lessonPlanResourceController.js
import LessonPlanResource from '../models/lessonPlanResourceModel.js';
import multer from 'multer';
import path from 'path';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage }).single('file');

// Upload file and create a new lesson plan resource
export const uploadResource = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload failed' });
    }

    const { lessonPlanId } = req.body;

    try {
      const newResource = await LessonPlanResource.create({
        fileName: req.file.originalname,
        filePath: req.file.path,
        lessonPlanId,
      });

      res.status(201).json(newResource);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create resource' });
    }
  });
};

// Get all resources for a specific lesson plan
export const getResourcesByLessonPlan = async (req, res) => {
  try {
    const { lessonPlanId } = req.params;
    const resources = await LessonPlanResource.findAll({ where: { lessonPlanId } });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
};
