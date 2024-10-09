
import Assessment from '../models/allassessmentModel.js';

export const createAssessment = async (req, res) => {
  try {
    const { date, type, competency, student_id, teacher_id, rubric_level, rubric_comments } = req.body;

    // Create the assessment with rubric details
    const assessment = await Assessment.create({
      date,
      type,
      competency,
      student_id,
      teacher_id,
      rubric_level,
      rubric_comments,
    });

    res.status(201).json({ message: 'Assessment created successfully', assessment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create assessment' });
  }
};


//get 
export const getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.findAll();
    res.status(200).json(assessments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch assessments' });
  }
};



//update

export const updateAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, type, competency, student_id, teacher_id, rubric_level, rubric_comments } = req.body;

    const assessment = await Assessment.findByPk(id);

    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    // Update the assessment
    await assessment.update({
      date,
      type,
      competency,
      student_id,
      teacher_id,
      rubric_level,
      rubric_comments,
    });

    res.status(200).json({ message: 'Assessment updated successfully', assessment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update assessment' });
  }
};


//delete

export const deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;

    const assessment = await Assessment.findByPk(id);

    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    // Delete the assessment
    await assessment.destroy();

    res.status(200).json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete assessment' });
  }
};


