import Assessment from '../models/assessmentModel.js';
import School from '../models/schoolModel.js';
import Teacher from '../models/teachersModel.js';
import Class from '../models/classModel.js';
import Student from '../models/studentModel.js';
import Assessments, { associateWithChoice } from '../models/superAssessmentModel.js';
import Choice, { associateWithAssessments } from '../models/choiceModel.js';

associateWithChoice(Choice);
associateWithAssessments(Assessments);

export const superCreateAssessment = async (req, res) => {
  const { title, description, grade, deadline, type, choices } = req.body;

  if (!title || !description || !grade || !deadline || !type) {
      return res.status(400).json({ error: 'All fields are required' });
  }

  try {
      const isSuperAdmin = req.user.role === 'super-admin';

      const newAssessment = await Assessments.create({
          title,
          description,
          grade,
          due_date: deadline,  // Updated to match your MySQL schema
          type_id: type === 'Essay' ? 1 : 2, // Assuming 'Essay' has id 1 and 'Multiple Choice' has id 2
          school_id: isSuperAdmin ? null : req.school_id,  // Set to null if super-admin
          class_id: isSuperAdmin ? null : req.class_id,    // Set to null if super-admin
          teacher_id: isSuperAdmin ? null : req.teacher_id,  // Set to null if super-admin
          student_id: isSuperAdmin ? null : req.student_id,  // Set to null if super-admin
      });

      if (type === 'Multiple Choice' && choices && choices.length > 0) {
          const choicePromises = choices.map((choice) =>
              Choice.create({ assessment_id: newAssessment.id, label: choice.label, text: choice.text })
          );
          await Promise.all(choicePromises);
      }

      res.status(201).json(newAssessment);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};



// Get all assessments with choices
export const superGetAllAssessments = async (req, res) => {
  try {
      const assessments = await Assessments.findAll({
          include: [
              {
                  model: Choice,
                  as: 'choices', // This should match the alias defined in the association
                  attributes: ['id', 'label', 'text', 'createdAt', 'updatedAt'], // Specify the attributes you want to include
              }
          ]
      });
      res.status(200).json(assessments);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// Get an assessment by ID with choices
export const superGetAssessmentById = async (req, res) => {
  const { id } = req.params;

  try {
      const assessment = await Assessments.findByPk(id, {
          include: [
              {
                  model: Choice,
                  as: 'choices', // This should match the alias defined in the association
                  attributes: ['id', 'label', 'text', 'createdAt', 'updatedAt'], // Specify the attributes you want to include
              }
          ]
      });

      if (!assessment) {
          return res.status(404).json({ error: 'Assessment not found' });
      }

      res.status(200).json(assessment);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};





// Delete an assessment by ID
export const superDeleteAssessment = async (req, res) => {
  const { id } = req.params;

  try {
      const assessment = await Assessments.findByPk(id);

      if (!assessment) {
          return res.status(404).json({ error: 'Assessment not found' });
      }

      await Assessments.destroy({ where: { id } });

      res.status(204).send(); // No Content
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};




// Update an assessment by ID
export const superUpdateAssessment = async (req, res) => {
  const { id } = req.params;
  const { title, description, grade, deadline, type, choices } = req.body;

  try {
      const assessment = await Assessments.findByPk(id);

      if (!assessment) {
          return res.status(404).json({ error: 'Assessment not found' });
      }

      const updatedAssessment = await Assessments.update({
          title,
          description,
          grade,
          due_date: deadline,
          type_id: type === 'Essay' ? 1 : 2, // Assuming 'Essay' has id 1 and 'Multiple Choice' has id 2
      }, {
          where: { id },
          returning: true,
      });

      const [_, [newAssessment]] = updatedAssessment;

      // Handle choices update if needed
      if (type === 'Multiple Choice' && choices && choices.length > 0) {
          // Assuming you want to update choices as well
          // You might need to delete existing choices first
          // const existingChoices = await Choice.findAll({ where: { assessment_id: id } });
          // await Choice.destroy({ where: { assessment_id: id } });

          const choicePromises = choices.map((choice) =>
              Choice.upsert({ assessment_id: id, label: choice.label, text: choice.text })
          );
          await Promise.all(choicePromises);
      }

      res.status(200).json(newAssessment);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};






//FOR TEACHERS

//create assessment for teachers

export const createAssessment = async (req, res) => {
  const { title, description, date, subject, classId, duration, totalMarks, teacherId, studentId } = req.body;

  if (!title || !description || !date || !subject || !classId || !duration || !totalMarks || !teacherId || !studentId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newAssessment = await Assessment.create({
      title,
      description,
      dueDate: date, // Assuming 'date' should be 'dueDate' in your model
      subject,
      classId,
      teacherId,
      schoolId: req.school_id,
      studentId,
    });
    res.status(201).json(newAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all assessments for a school
export const getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessments.findAll({
      where: { schoolId: req.school_id },
      include: [
        { model: Class, include: [Teacher] }, // Including associated class and teacher
        { model: Student } // Including associated students
      ]
    });
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an assessment by ID
export const getAssessmentById = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
      include: [
        { model: Class, include: [Teacher] }, // Including associated class and teacher
        { model: Student } // Including associated students
      ]
    });
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }
    res.status(200).json(assessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an assessment
export const updateAssessment = async (req, res) => {
  const { title, description, dueDate, subject, classId } = req.body;

  try {
    const existingAssessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
    });
    if (!existingAssessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    existingAssessment.title = title || existingAssessment.title;
    existingAssessment.description = description || existingAssessment.description;
    existingAssessment.dueDate = dueDate || existingAssessment.dueDate;
    existingAssessment.subject = subject || existingAssessment.subject;
    existingAssessment.classId = classId || existingAssessment.classId;
    await existingAssessment.save();

    res.status(200).json(existingAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an assessment
export const deleteAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
    });
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }
    await assessment.destroy();
    res.status(204).json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
