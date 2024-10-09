import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled components
const AnalyticsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const AnalyticsTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SchoolList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SchoolItem = styled.li`
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const AnalyticsChartContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const ChartInfo = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #555;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const AdvancedAnalytics = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schools');
      setSchools(response.data);
      toast.success('Schools loaded successfully!');
    } catch (error) {
      toast.error('Failed to fetch schools. Please try again.');
    }
  };

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
  };

  const renderChart = () => {
    if (!selectedSchool) return null;

    const regionData = calculateRegionData();

    return (
      <AnalyticsChartContainer>
        <ChartInfo>
          <h3>{selectedSchool.name}</h3>
          <p>Total Students: {selectedSchool.number_of_students}</p>
          <p>Total Teachers: {selectedSchool.teachers}</p>
          <p>Revenue: ${selectedSchool.revenue}</p>
          <p>Expenses: ${selectedSchool.expenses}</p>
          <p>Profit: ${selectedSchool.profit}</p>
        </ChartInfo>
        <Bar
          data={{
            labels: regionData.labels,
            datasets: [
              {
                label: 'Schools by Region',
                data: regionData.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                title: {
                  display: true,
                  text: 'Number of Schools',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Region',
                },
              },
            },
          }}
        />
      </AnalyticsChartContainer>
    );
  };

  const calculateRegionData = () => {
    // Example function to calculate region data based on fetched schools
    const regions = {};
    schools.forEach((school) => {
      const region = school.location; // Assuming location represents region
      if (regions[region]) {
        regions[region] += 1;
      } else {
        regions[region] = 1;
      }
    });

    return {
      labels: Object.keys(regions),
      data: Object.values(regions),
    };
  };

  return (
    <AnalyticsContainer>
      <ToastContainer />
      <AnalyticsTitle>Advanced Analytics</AnalyticsTitle>
      <SchoolList>
        {schools.map((school) => (
          <SchoolItem key={school.id} onClick={() => handleSchoolSelect(school)}>
            {school.name}
          </SchoolItem>
        ))}
      </SchoolList>
      {renderChart()}
    </AnalyticsContainer>
  );
};

export default AdvancedAnalytics;
