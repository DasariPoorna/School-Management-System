// models/assignmentModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Assignment = sequelize.define('Assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  grade: {
    type: DataTypes.STRING(50),
  },
  deadline: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Essay', 'Multiple Choice'),
    allowNull: false,
  },
  choices: {
    type: DataTypes.JSON,
    allowNull: true,
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

Assignment.belongsTo(School, { foreignKey: 'school_id' });

export default Assignment;
