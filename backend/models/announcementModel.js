import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Announcement = sequelize.define('Announcement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  announcement: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  section: {
    type: DataTypes.ENUM('All Parents', 'Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: School,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

export default Announcement;
