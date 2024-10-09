// models/curriculumManagementModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const CurriculumEntry = sequelize.define('CurriculumEntry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  section: {
    type: DataTypes.ENUM('Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lesson: {
    type: DataTypes.STRING(100),
  },
  timetable: {
    type: DataTypes.TEXT,
  },
  subTopics: {
    type: DataTypes.JSON, // Add subTopics as JSON
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

CurriculumEntry.belongsTo(School, { foreignKey: 'school_id' });

export default CurriculumEntry;
