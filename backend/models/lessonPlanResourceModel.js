// models/lessonPlanResourceModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import LessonPlan from './lessonPlansModel.js';

const { sequelize } = config;

const LessonPlanResource = sequelize.define('LessonPlanResource', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fileName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  filePath: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  lessonPlanId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: LessonPlan,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

LessonPlanResource.belongsTo(LessonPlan, { foreignKey: 'lessonPlanId' });

export default LessonPlanResource;
