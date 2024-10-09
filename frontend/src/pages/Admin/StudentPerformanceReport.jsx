import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const Error = styled.div`
    color: red;
    margin-bottom: 20px;
`;

const StudentPerformanceReport = ({ section, token }) => {
    const [studentReports, setStudentReports] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudentReports = async () => {
            try {
                const response = await fetch(`https://zawadi-project.onrender.com/api/performances?section=${section}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudentReports(data);
            } catch (error) {
                setError('Failed to fetch student performance reports');
            }
        };

        fetchStudentReports();
    }, [section, token]);

    return (
        <div>
            <h2>Student Performance Report</h2>
            {error && <Error>{error}</Error>}
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Grade</Th>
                        <Th>Attendance</Th>
                        <Th>Average Score</Th>
                    </tr>
                </thead>
                <tbody>
                    {studentReports.length > 0 ? (
                        studentReports.map((report) => (
                            <tr key={report.studentId}>
                                <Td>{report.studentId}</Td>
                                <Td>{report.name}</Td>
                                <Td>{report.grade}</Td>
                                <Td>{report.attendance}</Td>
                                <Td>{report.averageScore}</Td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Td colSpan="5">No student performance reports available</Td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default StudentPerformanceReport;
