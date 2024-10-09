import { DataTypes } from 'sequelize';
import config from '../config.js';
import Class from './classModel.js';
import School from './schoolModel.js';
import User from './userModel.js'; // Import User model

const { sequelize } = config;

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  registrationNumber: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  parentName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  parentEmail: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  parentPhone: {
    type: DataTypes.STRING(20),
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
  parentId: { // New field for linking students to their parents
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  tableName: 'Students',
  timestamps: true,
});

Student.belongsTo(Class, { foreignKey: 'class_id' });
Student.belongsTo(School, { foreignKey: 'school_id' });
Student.belongsTo(User, { foreignKey: 'parentId' }); // Define the relationship with User

export default Student;
