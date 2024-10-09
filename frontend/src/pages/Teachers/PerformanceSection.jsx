import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PerformanceContainer = styled.div`
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

const PerformanceSummary = styled.div`
  margin-bottom: 20px;
`;

const PerformanceItem = styled.div`
  margin-bottom: 10px;
`;

const Recommendations = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #e6f7ff;
  border-left: 4px solid #1890ff;
  border-radius: 5px;
`;

const PerformanceSection = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [averageMarks, setAverageMarks] = useState(0);
  const [highestMarks, setHighestMarks] = useState(0);
  const [lowestMarks, setLowestMarks] = useState(0);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/performances', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPerformanceData(response.data);
        calculatePerformanceSummary(response.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, []);

  const calculatePerformanceSummary = (data) => {
    const marks = data.map((item) => item.marks);
    const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
    const highest = Math.max(...marks);
    const lowest = Math.min(...marks);

    setAverageMarks(average);
    setHighestMarks(highest);
    setLowestMarks(lowest);
  };

  const getPerformanceLevel = (marks) => {
    if (marks >= 90) return 'Excellent';
    if (marks >= 75) return 'Meets Expectation';
    if (marks >= 50) return 'Average';
    return 'Below Average';
  };

  const subjectWisePerformance = performanceData.reduce((acc, curr) => {
    if (!acc[curr.subject]) acc[curr.subject] = [];
    acc[curr.subject].push(curr.marks);
    return acc;
  }, {});

  const subjectWiseAverage = Object.keys(subjectWisePerformance).map((subject) => {
    const total = subjectWisePerformance[subject].reduce((sum, mark) => sum + mark, 0);
    const average = total / subjectWisePerformance[subject].length;
    return { subject, average };
  });

  const trendData = {
    labels: performanceData.map((item) => item.date),
    datasets: [
      {
        label: 'Marks',
        data: performanceData.map((item) => item.marks),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <PerformanceContainer>
      <SectionTitle>Performance Section</SectionTitle>
      <PerformanceSummary>
        <PerformanceItem>Average Marks: {averageMarks.toFixed(2)}</PerformanceItem>
        <PerformanceItem>Highest Marks: {highestMarks}</PerformanceItem>
        <PerformanceItem>Lowest Marks: {lowestMarks}</PerformanceItem>
      </PerformanceSummary>
      <SectionTitle>Individual Student Performance</SectionTitle>
      {performanceData.map((item) => (
        <PerformanceItem key={item.id}>
          {item.studentName}: {item.marks} ({getPerformanceLevel(item.marks)})
        </PerformanceItem>
      ))}
      <SectionTitle>Subject-wise Performance</SectionTitle>
      {subjectWiseAverage.map((subject) => (
        <PerformanceItem key={subject.subject}>
          {subject.subject}: {subject.average.toFixed(2)}
        </PerformanceItem>
      ))}
      <SectionTitle>Performance Trends</SectionTitle>
      <Bar data={trendData} />
      <SectionTitle>Recommendations</SectionTitle>
      <Recommendations>
        {averageMarks < 50 && <p>The overall class performance is below average. Consider extra sessions or tutoring.</p>}
        {subjectWiseAverage.map((subject) =>
          subject.average < 50 ? (
            <p key={subject.subject}>
              The class is struggling with {subject.subject}. Focus on this subject to improve overall performance.
            </p>
          ) : null
        )}
      </Recommendations>
    </PerformanceContainer>
  );
};

export default PerformanceSection;


//Test Performance Using This

// [
//   {
//     "student_id": 1,
//     "class_id": 101,
//     "subject": "Mathematics",
//     "marks": 85
//   },
//   {
//     "student_id": 2,
//     "class_id": 101,
//     "subject": "Science",
//     "marks": 70
//   },
//   {
//     "student_id": 1,
//     "class_id": 102,
//     "subject": "English",
//     "marks": 90
//   },
//   {
//     "student_id": 3,
//     "class_id": 103,
//     "subject": "History",
//     "marks": 45
//   },
//   {
//     "student_id": 2,
//     "class_id": 101,
//     "subject": "Mathematics",
//     "marks": 78
//   }
// ]
