import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import Assignment from './assignmentsModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const StudentAssignment = sequelize.define('StudentAssignment', {
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Student,
      key: 'id',
    },
  },
  assignmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Assignment,
      key: 'id',
    },
  },
  submissionDate: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Submitted', 'Graded'),
  },
  grade: {
    type: DataTypes.DECIMAL(5, 2),
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
  tableName: 'StudentAssignments',
  timestamps: true,
});

StudentAssignment.belongsTo(School, { foreignKey: 'school_id' });

export default StudentAssignment;
