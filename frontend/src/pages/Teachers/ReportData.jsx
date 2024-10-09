import React from 'react';
import { ReportContainer, ReportTitle, ReportTable, Button } from '../../styles/ReportStyles.js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StudentReport = ({ data }) => {
    if (!data) {
      return <p>No student data available.</p>;
    }
  
    const { studentName, gradeLevel, subjects } = data;
  
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text('Student Report', 14, 16);
      doc.text(`Student Name: ${studentName}`, 14, 25);
      doc.text(`Grade Level: ${gradeLevel}`, 14, 32);
  
      const tableData = subjects.map(subject => [
        subject.subject,
        subject.performanceLevel,
        subject.feedback
      ]);
  
      doc.autoTable({
        startY: 40,
        head: [['Subject', 'Performance Level', 'Feedback']],
        body: tableData
      });
  
      doc.save(`${studentName}_report.pdf`);
    };
  
    return (
      <ReportContainer>
        <ReportTitle>Student Report</ReportTitle>
        <p><strong>Student Name:</strong> {studentName}</p>
        <p><strong>Grade Level:</strong> {gradeLevel}</p>
        <ReportTable>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Performance Level</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subject}</td>
                <td>{subject.performanceLevel}</td>
                <td>{subject.feedback}</td>
              </tr>
            ))}
          </tbody>
        </ReportTable>
        <Button onClick={generatePDF}>Download Report</Button>
      </ReportContainer>
    );
  };
  
  export default StudentReport;