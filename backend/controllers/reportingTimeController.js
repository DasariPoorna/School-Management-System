import ReportingTime from '../models/reportingTimeModel.js';
import School from '../models/schoolModel.js';

// Create a new report
export const createReport = async (req, res) => {
  try {
    const { teacherName, arrivalTime, departureTime, session, status, teacherId } = req.body;
    const schoolId = req.user.school_id;  // Extract from token

    const report = await ReportingTime.create({
      teacherName,
      arrivalTime,
      departureTime,
      session,
      status,
      teacherId,
      schoolId,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reports
export const getReports = async (req, res) => {
  try {
    const reports = await ReportingTime.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update (edit) a report by ID
export const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { teacherName, arrivalTime, departureTime, session, status, teacherId } = req.body;

    const report = await ReportingTime.findByPk(id);
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    report.teacherName = teacherName || report.teacherName;
    report.arrivalTime = arrivalTime || report.arrivalTime;
    report.departureTime = departureTime || report.departureTime;
    report.session = session || report.session;
    report.status = status || report.status;
    report.teacherId = teacherId || report.teacherId;

    await report.save();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a report by ID
export const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await ReportingTime.findByPk(id);
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    await report.destroy();
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
