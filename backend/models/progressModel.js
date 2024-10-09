// models/progressModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Progress = sequelize.define('Progress', {
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
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  progress_data: {
    type: DataTypes.TEXT,
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
  timestamps: true, // Enable Sequelize's automatic timestamps
});

Progress.belongsTo(School, { foreignKey: 'school_id' });

export default Progress;
