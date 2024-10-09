import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Demo = sequelize.define('Demos', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Demo;
