import AttendanceRecord from '../models/attendanceRecordModel.js';
import School from '../models/schoolModel.js';

export const createAttendanceRecord = async (req, res) => {
  const attendanceData = req.body.attendanceData; // Expecting attendanceData in the request body

  if (!Array.isArray(attendanceData) || attendanceData.length === 0) {
    return res.status(400).json({ error: 'Attendance data is required and must be an array' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const records = await AttendanceRecord.bulkCreate(
      attendanceData.map(({ student_id, student_name, attendance_date, status }) => ({
        student_id,
        student_name,
        attendance_date,
        status, 
        school_id: req.school_id,
      })),
      { validate: true } // Validate data before creating
    );

    res.status(201).json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create attendance records', details: error.message });
  }
};

//get all

export const getAllAttendanceRecords = async (req, res) => {
  const { student_id } = req.query;

  try {
    const whereClause = { school_id: req.school_id };

    if (req.user.role === 'parent') {
      whereClause.student_id = student_id ? student_id : req.user.studentIds;
    } else if (student_id) {
      whereClause.student_id = student_id;
    }

    const attendanceRecords = await AttendanceRecord.findAll({ where: whereClause });
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance records', details: error.message });
  }
};

//get by id
export const getAttendanceRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await AttendanceRecord.findOne({
      where: { id, school_id: req.school_id },
    });
    if (attendanceRecord) {
      res.json(attendanceRecord);
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance record', details: error.message });
  }
};

// Update Attendance Record
export const updateAttendanceRecord = async (req, res) => {
  const { id } = req.params;
  const { student_id, student_name, attendance_date, status } = req.body;

  try {
    const existingAttendanceRecord = await AttendanceRecord.findOne({
      where: { id, school_id: req.school_id },
    });
    if (existingAttendanceRecord) {
      await existingAttendanceRecord.update({
        student_id,
        student_name,
        attendance_date,
        status,
      });
      res.json({ message: 'Attendance record updated successfully' });
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update attendance record', details: error.message });
  }
};

// Delete Attendance Record
export const deleteAttendanceRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await AttendanceRecord.findOne({
      where: { id, school_id: req.school_id },
    });
    if (attendanceRecord) {
      await attendanceRecord.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete attendance record', details: error.message });
  }
};
