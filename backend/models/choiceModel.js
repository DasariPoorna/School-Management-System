import config from '../config.js';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = config.sequelize;

const Choice = sequelize.define('Choice', {
    assessment_id: { type: DataTypes.INTEGER, allowNull: false },
    label: { type: DataTypes.CHAR(1), allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: true,
});

export function associateWithAssessments(Assessments) {
    Choice.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });
}

export default Choice;
