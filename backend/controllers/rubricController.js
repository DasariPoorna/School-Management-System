import Rubric from '../models/rubricModel.js';

export const getRubricByAssessment = async (req, res) => {
  try {
    const { assessment_id } = req.params;
    const rubrics = await Rubric.findAll({
      where: { assessment_id },
    });

    res.status(200).json(rubrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch rubric' });
  }
};
