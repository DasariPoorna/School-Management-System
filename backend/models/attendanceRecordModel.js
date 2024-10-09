import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const AttendanceRecord = sequelize.define('AttendanceRecord', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  student_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  attendance_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent', 'Absent with apology'),
    allowNull: false,
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: School,
      key: 'id',
    },
  },
}, {
  timestamps: true,
  tableName: 'attendancerecords',
});

AttendanceRecord.belongsTo(School, { foreignKey: 'school_id' });

export default AttendanceRecord;
