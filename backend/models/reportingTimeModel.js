import { DataTypes } from 'sequelize';
import config from '../config.js';
import Teacher from './teachersModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const ReportingTime = sequelize.define('ReportingTime', {
  teacherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  session: {
    type: DataTypes.ENUM('Morning', 'Evening'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Early', 'On Time', 'Late'),
    allowNull: false,
  },
  schoolId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: School,
      key: 'id',
    },
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Teacher,
      key: 'id', 
    },
  },
});

ReportingTime.belongsTo(Teacher, { foreignKey: 'teacherId' });
ReportingTime.belongsTo(School, { foreignKey: 'schoolId' });

export default ReportingTime;
