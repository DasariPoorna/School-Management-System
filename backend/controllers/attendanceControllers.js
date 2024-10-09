import Attendance from '../models/attendanceModel.js';
import Student from '../models/studentModel.js';

// Create Attendance Record
export const createAttendanceRecord = async (req, res) => {
  const { attendanceData } = req.body;

  try {
    const attendanceRecords = await Promise.all(
      attendanceData.map(async (record) => {
        const { studentId, date, status } = record;

        // Check if student exists
        const student = await Student.findByPk(studentId);
        if (!student) {
          throw new Error(`Student with ID ${studentId} not found`);
        }

        // Create attendance record
        return await Attendance.create({
          student_id: studentId,
          date,
          status,
        });
      })
    );

    res.status(201).json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create attendance records', details: error.message });
  }
};

// Get All Attendance Records
export const getAllAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.findAll();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance records', details: error.message });
  }
  
};

// Get Attendance Record by ID
export const getAttendanceRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await Attendance.findByPk(id);
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
  const { student_id, date, status } = req.body;

  try {
    const existingAttendanceRecord = await Attendance.findByPk(id);
    if (existingAttendanceRecord) {
      await existingAttendanceRecord.update({
        student_id,
        date,
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
    const attendanceRecord = await Attendance.findByPk(id);
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
