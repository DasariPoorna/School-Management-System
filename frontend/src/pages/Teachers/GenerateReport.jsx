import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';

const ReportContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Option = styled.option`
  padding: 8px;
`;

const GradesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// PDF Document Component
const MyDocument = ({ schoolName, studentName, admissionNumber, grades }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>REPORT CARD</Text>
        <Text style={styles.schoolName}>{schoolName}</Text>
      </View>
      <View style={styles.studentInfo}>
        <View style={styles.studentInfoRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{studentName}</Text>
        </View>
        <View style={styles.studentInfoRow}>
          <Text style={styles.label}>Admission Number:</Text>
          <Text style={styles.value}>{admissionNumber}</Text>
        </View>
        <View style={styles.studentInfoRow}>
          <Text style={styles.label}>Adviser:</Text>
          <Text style={styles.value}>[Adviser Name]</Text>
        </View>
        <View style={styles.studentInfoRow}>
          <Text style={styles.label}>Grading Period:</Text>
          <Text style={styles.value}>[Grading Period]</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableHeader}>Subject</Text>
          <Text style={styles.tableHeader}>Grade</Text>
          <Text style={styles.tableHeader}>Feedback</Text>
        </View>
        {grades.map((grade, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{grade.subject}</Text>
            <Text style={styles.tableCell}>{grade.grade}</Text>
            <Text style={styles.tableCell}>{grade.feedback || '-'}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.gradingScaleTitle}>Grading Scale:</Text>
        <Text style={styles.gradingScale}>A+: 96-100, A: 91-95, A-: 86-90</Text>
        <Text style={styles.gradingScale}>B+: 81-85, B: 76-80, C: 71-75</Text>
        <Text style={styles.gradingScale}>D: 66-70, F: 65 and below</Text>
        <Text style={styles.daysInfo}>Total Days of School: [Total Days]</Text>
        <Text style={styles.daysInfo}>Days Attended: [Days Attended]</Text>
        <Text style={styles.daysInfo}>Days Absent: [Days Absent]</Text>
      </View>
    </Page>
  </Document>
);

const GenerateReport = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch students from API
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch grades for the selected student from API
      const fetchGrades = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/api/grades?student_id=${selectedStudent}`);
          setGrades(response.data);
        } catch (error) {
          console.error('Error fetching grades:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchGrades();
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  return (
    <ReportContainer>
      <SectionTitle>Generate Student Report</SectionTitle>
      <InputGroup>
        <Label>Select Student:</Label>
        <Select value={selectedStudent} onChange={handleStudentChange}>
          <Option value="">Select Student</Option>
          {students.map((student) => (
            <Option key={student.id} value={student.id}>
              {student.name} - {student.admissionNumber}
            </Option>
          ))}
        </Select>
      </InputGroup>

      {selectedStudent && grades.length > 0 && !loading && (
        <div>
          <PDFDownloadLink
            document={<MyDocument 
                        schoolName="Your School Name" 
                        studentName={students.find(student => student.id === selectedStudent)?.name} 
                        admissionNumber={students.find(student => student.id === selectedStudent)?.admissionNumber} 
                        grades={grades} 
                      />}
            fileName={`${students.find(student => student.id === selectedStudent)?.name}_Report.pdf`}
          >
            {({ loading }) => (
              <DownloadButton>
                {loading ? 'Loading document...' : 'Download Report'}
              </DownloadButton>
            )}
          </PDFDownloadLink>

          <h3>Grades for {students.find(student => student.id === selectedStudent)?.name}</h3>
          <GradesTable>
            <thead>
              <tr>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Marks</TableHeader>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <TableData>{grade.subject}</TableData>
                  <TableData>{grade.grade}</TableData>
                </tr>
              ))}
            </tbody>
          </GradesTable>
        </div>
      )}

      {loading && <p>Loading grades...</p>}
    </ReportContainer>
  );
};

export default GenerateReport;

// Styles for PDF Document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  schoolName: {
    fontSize: 18,
    marginTop: 5,
  },
  studentInfo: {
    marginBottom: 20,
  },
  studentInfoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '30%',
    fontWeight: 'bold',
  },
  value: {
    width: '70%',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderCollapse: 'collapse',
    marginTop: 10,
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  tableHeader: {
    margin: 'auto',
    marginTop: 5,
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    padding: 5,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
  },
  footer: {
    marginTop: 20,
  },
  gradingScaleTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gradingScale: {
    fontSize: 12,
  },
  daysInfo: {
    fontSize: 12,
    marginTop: 5,
  },
});
