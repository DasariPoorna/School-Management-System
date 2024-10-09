import config from '../config.js';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = config.sequelize;

const Assessments = sequelize.define('Assessment', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    grade: { type: DataTypes.STRING },
    due_date: { type: DataTypes.DATE, allowNull: false },
    type_id: { type: DataTypes.INTEGER, allowNull: false },
    school_id: { type: DataTypes.INTEGER, allowNull: true },
    class_id: { type: DataTypes.INTEGER, allowNull: true },
    teacher_id: { type: DataTypes.INTEGER, allowNull: true },
    student_id: { type: DataTypes.INTEGER, allowNull: true },
}, {
    timestamps: true,
});

export function associateWithChoice(Choice) {
    Assessments.hasMany(Choice, { foreignKey: 'assessment_id', as: 'choices' });
}

export default Assessments;
