// models/lessonPlansModel.js
import { DataTypes } from 'sequelize';
import Class from './classModel.js';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const LessonPlan = sequelize.define('LessonPlan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
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
  timestamps: true, // Enable Sequelize's automatic timestamps
});

LessonPlan.belongsTo(Class, { foreignKey: 'class_id' });
LessonPlan.belongsTo(School, { foreignKey: 'school_id' });

export default LessonPlan;
