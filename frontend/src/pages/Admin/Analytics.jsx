import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? '250px' : '60px')}; /* Adjust based on sidebar width */
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0; /* No margin for small devices */
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap; /* Allows buttons to wrap on smaller screens */
`;

const Button = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Analytics = ({ sidebarExpanded }) => {
  const chartRef = useRef(null);
  const [selectedSection, setSelectedSection] = useState('Early Years');
  const [myChart, setMyChart] = useState(null);

  const getChartData = (section) => {
    switch (section) {
      case 'Early Years':
        return {
          labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
          values: [500, 95, 85, 75, 80]
        };
      case 'Middle School':
        return {
          labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
          values: [300, 90, 80, 70, 75]
        };
      case 'Junior Secondary':
        return {
          labels: ['Total Students', 'Attendance Rate', 'Average Performance', 'Assessment Completion Rate', 'Overall Progress'],
          values: [200, 85, 75, 65, 70]
        };
      default:
        return {
          labels: [],
          values: []
        };
    }
  };

  useEffect(() => {
    const { labels, values } = getChartData(selectedSection);

    const ctx = chartRef.current.getContext('2d');
    if (myChart) {
      myChart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Data',
            data: values,
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setMyChart(newChart);

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [selectedSection]);

  return (
    <Container sidebarExpanded={sidebarExpanded}>
      <SectionTitle>Analytics Dashboard</SectionTitle>
      <ButtonGroup>
        {['Early Years', 'Middle School', 'Junior Secondary'].map((section) => (
          <Button
            key={section}
            onClick={() => setSelectedSection(section)}
          >
            {section}
          </Button>
        ))}
      </ButtonGroup>
      <canvas ref={chartRef} />
    </Container>
  );
};

export default Analytics;
