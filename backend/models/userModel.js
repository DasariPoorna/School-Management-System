// models/userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const sequelize = config.sequelize;

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('super-admin', 'admin', 'teacher', 'parent'),
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
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
});

User.belongsTo(School, { foreignKey: 'school_id' });

export default User;
