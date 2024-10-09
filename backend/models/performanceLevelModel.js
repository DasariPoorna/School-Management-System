import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const PerformanceLevel = sequelize.define('PerformanceLevel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  level: {
    type: DataTypes.STRING(50),
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
  tableName: 'PerformanceLevels',
  timestamps: true,
});

PerformanceLevel.belongsTo(School, { foreignKey: 'school_id' });

export default PerformanceLevel;
