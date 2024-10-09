import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import Class from './classModel.js';
import Subject from './subjectModel.js';
import PerformanceLevel from './performanceLevelModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const StudentPerformance = sequelize.define('StudentPerformance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id',
    },
  },
  grade_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'id',
    },
  },
  subject_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Subject,
      key: 'id',
    },
  },
  performance_level_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PerformanceLevel,
      key: 'id',
    },
  },
  feedback: {
    type: DataTypes.TEXT,
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
  tableName: 'StudentPerformance',
  timestamps: true,
});

StudentPerformance.belongsTo(Student, { foreignKey: 'student_id' });
StudentPerformance.belongsTo(Class, { foreignKey: 'grade_id' });
StudentPerformance.belongsTo(Subject, { foreignKey: 'subject_id' });
StudentPerformance.belongsTo(PerformanceLevel, { foreignKey: 'performance_level_id' });
StudentPerformance.belongsTo(School, { foreignKey: 'school_id' });

export default StudentPerformance;
