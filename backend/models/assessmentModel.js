// models/assessmentModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';
import Teacher from './teachersModel.js';
import Class from './classModel.js';
import Student from './studentModel.js';

const { sequelize } = config;

const Assessment = sequelize.define('Assessment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: 'id',
    }, 
  },
  schoolId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: School,
      key: 'id',
    },
  },
});

Assessment.belongsTo(Class, { foreignKey: 'classId' });
Assessment.belongsTo(Teacher, { foreignKey: 'teacherId' });
Assessment.belongsTo(School, { foreignKey: 'schoolId' });
// Assessment.hasMany(Student, { foreignKey: 'assessmentId' });

export default Assessment;
