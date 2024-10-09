// models/assessmentReportModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const AssessmentReport = sequelize.define('AssessmentReport', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  assessment_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  assessment_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
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
  timestamps: true, // Enable Sequelize's automatic timestamps
});

AssessmentReport.belongsTo(School, { foreignKey: 'school_id' });

export default AssessmentReport;
