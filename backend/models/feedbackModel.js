import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Feedback = sequelize.define('Feedback', {
  feedback_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
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
});

Feedback.belongsTo(Student, { foreignKey: 'student_id' });
Feedback.belongsTo(School, { foreignKey: 'school_id' });

export default Feedback;
