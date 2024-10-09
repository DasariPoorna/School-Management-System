import Assessments from './superAssessmentModel.js';
import Choice from './choiceModel.js';

// Establishing the association after both models are imported
Assessments.hasMany(Choice, { foreignKey: 'assessment_id', as: 'choices' });
Choice.belongsTo(Assessments, { foreignKey: 'assessment_id', as: 'assessment' });

export default function initializeAssociations() {
    // You can add any additional associations here in the future
}
