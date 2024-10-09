import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  TeacherContainer, 
  Header, 
  ClassDropdown, 
  StudentListTable, 
  AssessmentForm, 
  RubricForm, 
  Button, 
  AssessmentsTable, 
  StudentDetailsSection,
  AddButton,
  Spacer
} from '../../styles/EnterMarksPageStyles.js';

const EnterMarksPage = () => {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    competency: '',
    rubric_level: '',
    rubric_comments: ''
  });
  const [competencies, setCompetencies] = useState(['']); // Array to handle multiple competency inputs
  const [assessments, setAssessments] = useState([]);
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      if (selectedClass) {
        try {
          const response = await axios.get(`https://zawadi-project.onrender.com/api/students?class_id=${selectedClass}`);
          setStudents(response.data);
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      }
    };
    fetchStudents();
  }, [selectedClass]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/allassessments');
        setAssessments(response.data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };
    fetchAssessments();
  }, []);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedStudent(null);
  };

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };

  const handleStudentSelect = async (student) => {
    setSelectedStudent(student);

    try {
      const response = await axios.get(`https://zawadi-project.onrender.com/api/students/${student.id}`);
      setStudentDetails(response.data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCompetencyChange = (index, value) => {
    const newCompetencies = [...competencies];
    newCompetencies[index] = value;
    setCompetencies(newCompetencies);
  };

  const addCompetencyField = () => {
    setCompetencies([...competencies, '']);
  };

  const handleSubmit = async () => {
    try {
      // If there's a single competency, we'll use it directly, otherwise combine the competencies array
      const assessmentData = {
        ...formData,
        competency: competencies.length === 1 ? competencies[0] : competencies.join(', '), // Handle single and multiple competencies
        student_id: selectedStudent.id,
        teacher_id: selectedTeacher,
      }; 
  
      await axios.post('https://zawadi-project.onrender.com/api/allassessments', assessmentData);
      toast.success('Assessment created successfully!');
    } catch (error) {
      console.error('Error creating assessment:', error);
      toast.error('Failed to create assessment.');
    }
  };
  

  return (
    <TeacherContainer>
      <Header>Enter Marks</Header>
      
      <label>Select Teacher</label>
      <ClassDropdown value={selectedTeacher} onChange={handleTeacherChange}>
        <option value="">Select Teacher</option>
        {teachers.map(teacher => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </ClassDropdown>

      <ClassDropdown value={selectedClass} onChange={handleClassChange}>
        <option value="">Select Class</option>
        {classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.grade}
              </option>
            ))}
      </ClassDropdown>
      
      <StudentListTable>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>
                  <Button onClick={() => handleStudentSelect(student)}>Select</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students found for this class.</td>
            </tr>
          )}
        </tbody>
      </StudentListTable>

      {selectedStudent && (
        <>
          <AssessmentForm>
            <h3>Create Assessment for {selectedStudent.name}</h3>
            
            <label>Assessment Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleInputChange} 
            />
            
            <label>Assessment Type</label>
            <select 
              name="type" 
              value={formData.type} 
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="Test">Test</option>
              <option value="Quiz">Quiz</option>
              <option value="Project">Project</option>
            </select>
            
            <label>Competency</label>
            {competencies.map((competency, index) => (
              <div key={index}>
                <input 
                  type="text" 
                  value={competency} 
                  onChange={(e) => handleCompetencyChange(index, e.target.value)} 
                  placeholder="Enter competency" 
                />
              </div>
            ))}
            <AddButton onClick={addCompetencyField}>+ Add</AddButton>

            <RubricForm>
              <label>Rubric Level</label>
              <select 
                name="rubric_level" 
                value={formData.rubric_level} 
                onChange={handleInputChange}
              >
                <option value="">Select Level</option>
                <option value="ME">Meeting Expectations (ME) - 80% - 100% </option>
                <option value="EE">Exceeding Expectations (EE) - 60% - 79% </option>
                <option value="AE">Approaching Expectations (AE) - 40% - 59% </option>
                <option value="BE">Below Expectations (BE) - Below 40% </option>
              </select>

              <textarea 
                name="rubric_comments" 
                value={formData.rubric_comments} 
                onChange={handleInputChange} 
                placeholder="Comments"
              />
            </RubricForm>

            <Button onClick={handleSubmit}>Submit Rubric Levels</Button>
          </AssessmentForm>

          {/* Add Spacer component to create large distance */}
          <Spacer />
        </>
      )}

      <AssessmentsTable>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {assessments.length > 0 ? (
            assessments.map((assessment) => (
              <tr
                key={assessment?.id}
                onClick={() => handleStudentSelect(assessment.student)}
              >
                <td>{assessment.student?.name || "N/A"}</td>
                <td>{assessment.student?.id || "N/A"}</td>
                <td>{assessment?.class_name || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No assessments found.</td>
            </tr>
          )}
        </tbody>
      </AssessmentsTable>

      {studentDetails && (
        <StudentDetailsSection>
          <h3>Details for {studentDetails.name || "Unknown Student"}</h3>
          <p><strong>Class:</strong> {studentDetails.class_name || "N/A"}</p>
          <p><strong>Teacher:</strong> {studentDetails.teacher_name || "N/A"}</p>
          <p><strong>Assessment Type:</strong> {studentDetails.type || "N/A"}</p>
        </StudentDetailsSection>
      )}

      <ToastContainer />
    </TeacherContainer>
  );
};

export default EnterMarksPage;
