// models/timetableModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import Class from './classModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Timetable = sequelize.define('Timetable', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  day: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING(20),
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
  tableName: 'Timetables',
  timestamps: true,
});

Timetable.belongsTo(Class, { foreignKey: 'class_id' });
Timetable.belongsTo(School, { foreignKey: 'school_id' });

export default Timetable;
