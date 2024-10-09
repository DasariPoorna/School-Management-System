import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import Teacher from './teachersModel.js';

const { sequelize } = config;

const Assessment = sequelize.define('Assessment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  competency: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: 'id',
    },
  },
  rubric_level: {
    type: DataTypes.ENUM('ME', 'EE', 'AE', 'BE'),
    allowNull: false,
  },
  rubric_comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'Assessments_marks',
  timestamps: true,
});

Assessment.belongsTo(Student, { foreignKey: 'student_id' });
Assessment.belongsTo(Teacher, { foreignKey: 'teacher_id' }); // Define the relationship

export default Assessment;
