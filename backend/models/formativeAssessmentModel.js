import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';
import Class from './classModel.js';

const { sequelize } = config;

const FormativeAssessment = sequelize.define('formative_assessments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  class_level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  admission_number: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  topic: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  subtopic: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  correct_answers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_answers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  performance_level: {
    type: DataTypes.ENUM('Excellent', 'Meets Expectation', 'Average', 'Below Average'),
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
  timestamps: true,
  tableName: 'formative_assessments',
});

FormativeAssessment.belongsTo(School, { foreignKey: 'school_id' });
FormativeAssessment.belongsTo(Class, { foreignKey: 'class_level' });

export default FormativeAssessment;
