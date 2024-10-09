import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';

const { sequelize } = config;

const Attendance = sequelize.define('Attendance', {
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
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent', 'Absent with apology'),
    allowNull: false,
  },
}, {
  timestamps: true, // Enable Sequelize's automatic timestamps
});

Attendance.belongsTo(Student, { foreignKey: 'student_id' });

export default Attendance;
