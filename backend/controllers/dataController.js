import SomeDataModel from '../models/someDataModel.js';

const getDataForSchool = async (req, res) => {
  try {
    const schoolId = req.user.schoolId;
    const data = await SomeDataModel.findAll({ where: { school_id: schoolId } });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export { getDataForSchool };
