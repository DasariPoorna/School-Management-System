// models/enteredMarkModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';
import Class from './classModel.js';

const { sequelize } = config;

const EnteredMark = sequelize.define('EnteredMark', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_name: {
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
  tableName: 'enteredmarks',
});

EnteredMark.belongsTo(School, { foreignKey: 'school_id' });
EnteredMark.belongsTo(Class, { foreignKey: 'class_level' });

export default EnteredMark;
