// controllers/userController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../models/userModel.js';
import School from '../models/schoolModel.js';
import Student from '../models/studentModel.js';

const { jwtSecret } = config;


// Register Super-admin
export const registerSuperAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'super-admin',
    });
    res.status(201).json({ message: 'Super-admin registered successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Super-admin registration failed', details: error.message });
  }
};


//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    let studentIds = [];
    if (user.role === 'parent') {
      const students = await Student.findAll({ where: { parentId: user.id } });
      studentIds = students.map(student => student.id);
    }

    const tokenPayload = { 
      userId: user.id, 
      role: user.role, 
      school_id: user.school_id,
      studentIds
    };

    //explains expiry of token

    const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '30d' });

    res.status(200).json({ message: 'Login successful', token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};



// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     const token = jwt.sign({ userId: user.id, role: user.role, school_id: user.school_id }, jwtSecret, { expiresIn: '1h' });

//     if (user.role === 'parent') {
//       // Fetch linked students for the parent
//       const students = await Student.findAll({ where: { parentId: user.id } });
//       console.log('Linked students for parent:', students); // Log student details
//     } else {
//       console.log('User details:', user); // Log user details for other roles
//     }

//     res.status(200).json({ message: 'Login successful', token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed', details: error.message });
//   }
// };



// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     console.log('User details: ', user); // Log user details

//     const token = jwt.sign({ userId: user.id, role: user.role, school_id: user.school_id }, jwtSecret, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Login successful', token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed', details: error.message });
//   }
// };

// Create Admin by Super-admin
export const createAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newSchool = await School.create({
      name: `School for ${username}`,
      address: 'Default Address',
      director: username,
      location: 'Default Location',
      number_of_students: 0,
      plan: 'free',
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'admin',
      school_id: newSchool.id,
    });
    res.status(201).json({ message: 'Admin created successfully', userId: user.id, schoolId: newSchool.id });
  } catch (error) {
    res.status(500).json({ error: 'Admin creation failed', details: error.message });
  }
};

// Create Teacher by Admin
export const createTeacher = async (req, res) => {
  const { username, email, password, school_id } = req.body;

  if (!username || !email || !password || !school_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'teacher',
      school_id,
    });
    res.status(201).json({ message: 'Teacher created successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Teacher creation failed', details: error.message });
  }
};



//Parents Linked to students
// Fetch Linked Students for a Parent
export const getParentStudents = async (req, res) => {
  const parentId = req.user.id; // Assuming the parent ID is available from the token

  try {
    const students = await Student.findAll({ where: { parentId } });
    res.status(200).json(students);
  } catch (error) {
    console.error('Error Details:', error);
    res.status(500).json({ error: 'Failed to retrieve students', details: error.message });
  }
};


// Create Parent by Admin
export const createParent = async (req, res) => {
  const { username, email, password, school_id, children } = req.body;

  if (!username || !email || !password || !school_id || !children || !Array.isArray(children) || children.length === 0) {
    return res.status(400).json({ error: 'All fields are required, and children must be a non-empty array of student IDs' });
  }

  try {
    // Check if all students exist
    const studentIds = children.map(child => child.student_id);
    const students = await Student.findAll({ where: { id: studentIds } });
    const existingStudentIds = students.map(student => student.id);

    if (studentIds.length !== existingStudentIds.length) {
      return res.status(400).json({ error: 'One or more student IDs are invalid or do not exist' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the parent user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'parent',
      school_id,
    });

    // Link the students to the parent
    await Promise.all(children.map(async (child) => {
      if (child.student_id) {
        await Student.update({ parentId: user.id }, { where: { id: child.student_id } });
      }
    }));

    res.status(201).json({ message: 'Parent created successfully', userId: user.id });
  } catch (error) {
    console.error('Error Details:', error);
    res.status(500).json({ error: 'Parent creation failed', details: error.message });
  }
};



// controllers/userController.js

export const getAdminProfile = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId, {
      include: [{ model: School, attributes: ['name'] }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role,
      schoolName: user.School ? user.School.name : 'No School Assigned'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile details', details: error.message });
  }
};

// Add these functions
export const getTeacherProfile = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId, {
      include: [{ model: School, attributes: ['name'] }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role,
      schoolName: user.School ? user.School.name : 'No School Assigned'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile details', details: error.message });
  }
};

// Fetch Parent Profile
export const getParentProfile = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId, {
      include: [{ model: School, attributes: ['name'] }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role,
      schoolName: user.School ? user.School.name : 'No School Assigned'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile details', details: error.message });
  }
};

