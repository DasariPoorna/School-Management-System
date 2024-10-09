import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  address: {
    type: DataTypes.STRING(255),
  },
  qualification: {
    type: DataTypes.STRING(255),
  },
  subject: {
    type: DataTypes.STRING(255),
  },
  experience: {
    type: DataTypes.STRING(255),
  },
  performance: {
    type: DataTypes.STRING(255),
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
  tableName: 'Teachers',
  timestamps: true,
});

Teacher.belongsTo(School, { foreignKey: 'school_id' });

export default Teacher;
