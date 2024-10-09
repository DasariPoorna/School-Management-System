import { DataTypes } from 'sequelize';
import config from '../config.js';
import Assessment from './allassessmentModel.js';

const { sequelize } = config;

const Rubric = sequelize.define('Rubric', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  level: {
    type: DataTypes.ENUM('ME', 'EE', 'AE'),
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  assessment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Assessment,
      key: 'id',
    },
  },
}, {
  tableName: 'Rubrics',
  timestamps: true,
});

Rubric.belongsTo(Assessment, { foreignKey: 'assessment_id' });

export default Rubric;
