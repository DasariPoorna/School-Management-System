import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableHeader,
  Message,
  DateHeader,
} from '../../styles/AdminViewReportingTimeStyles';

const AdminViewReportingTime = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reports from API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('https://zawadi-project.onrender.com/api/reporting-time');
        
        // Sort reports by createdAt in descending order
        const sortedReports = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReports(sortedReports);
      } catch (error) {
        setError('Failed to fetch reports.');
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Helper function to format dates and determine labels (Today, Yesterday, etc.)
  const formatDateHeader = (date) => {
    const today = new Date();
    const reportDate = new Date(date);
    
    const dayDifference = Math.floor(
      (today - reportDate) / (1000 * 60 * 60 * 24)
    );

    if (dayDifference === 0) {
      return `Today is ${reportDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}`;
    } else if (dayDifference === 1) {
      return `Yesterday on ${reportDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}`;
    } else {
      return `On ${reportDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}`;
    }
  };

  // Group reports by date
  const groupReportsByDate = () => {
    return reports.reduce((grouped, report) => {
      const dateKey = new Date(report.createdAt).toLocaleDateString();
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(report);
      return grouped;
    }, {});
  };

  if (loading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error}</Message>;
  }

  const groupedReports = groupReportsByDate();

  return (
    <Container>
      <Title>Teacher Arrival Times</Title>
      {Object.keys(groupedReports).length > 0 ? (
        Object.keys(groupedReports).map((dateKey, index) => (
          <div key={index}>
            <DateHeader>{formatDateHeader(groupedReports[dateKey][0].createdAt)}</DateHeader>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Teacher Name</TableHeader>
                  <TableHeader>Arrival Time</TableHeader>
                  <TableHeader>Departure Time</TableHeader>
                  <TableHeader>Session</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Date</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                {groupedReports[dateKey].map((report, index) => (
                  <TableRow key={index}>
                    <TableData>{report.teacherName}</TableData>
                    <TableData>{report.arrivalTime}</TableData>
                    <TableData>{report.departureTime || 'N/A'}</TableData>
                    <TableData>{report.session}</TableData>
                    <TableData>{report.status}</TableData>
                    <TableData>{new Date(report.createdAt).toLocaleTimeString()}</TableData> {/* Show Time */}
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        ))
      ) : (
        <Message>No reports available.</Message>
      )}
    </Container>
  );
};

export default AdminViewReportingTime;
