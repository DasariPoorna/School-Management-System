import jwt from 'jsonwebtoken';
import config from '../config.js';
import Student from '../models/studentModel.js';

const { jwtSecret } = config;

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    req.school_id = decoded.school_id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export const ensureParentAccessToStudent = async (req, res, next) => {
  const parentId = req.user.userId;
  const studentId = req.params.studentId || req.query.student_id;

  if (req.user.role === 'parent' && !req.user.studentIds.includes(parseInt(studentId))) {
    return res.status(403).json({ error: 'Access denied. You are not linked to this student.' });
  }

  next();
};

export default auth;
