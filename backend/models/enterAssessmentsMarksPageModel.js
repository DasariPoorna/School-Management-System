// <<<<<<< HEAD
// import { DataTypes } from 'sequelize';
// import config from '../config.js';
// import School from './schoolModel.js';

// const { sequelize } = config;

// const enter_assessment_marks = sequelize.define('enter_assessment_marks', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//   },
//   school_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: School,
//       key: 'id',
//     },
//   },
// }, {
//   timestamps: true,
// });

// Teacher.belongsTo(School, { foreignKey: 'school_id' });

// export default enter_assessment_marks;
// =======
import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';

const { sequelize } = config;

const enter_assessment_marks = sequelize.define('enter_assessment_marks', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
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
});

Teacher.belongsTo(School, { foreignKey: 'school_id' });

export default enter_assessment_marks;


