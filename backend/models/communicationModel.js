// models/communicationModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Communication = sequelize.define('Communication', {
  communication_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  date_sent: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
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
  tableName: 'communications',
});

Communication.belongsTo(School, { foreignKey: 'school_id' });

export default Communication;
