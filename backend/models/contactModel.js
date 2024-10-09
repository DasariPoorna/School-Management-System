import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt fields automatically
});

export default Contact;
