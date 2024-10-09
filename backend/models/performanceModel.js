import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js';
import Class from './classModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Performance = sequelize.define('Performance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  marks: {
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
  timestamps: true,
});

Performance.belongsTo(School, { foreignKey: 'school_id' });
Performance.belongsTo(Student, { foreignKey: 'student_id' });
Performance.belongsTo(Class, { foreignKey: 'class_id' });

export default Performance;
