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

const AssessmentReport = ({ section, token }) => {
    const [assessmentReports, setAssessmentReports] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAssessmentReports = async () => {
            try {
                const response = await fetch(`https://zawadi-project.onrender.com/api/assessment-reports?section=${section}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAssessmentReports(data);
            } catch (error) {
                setError('Failed to fetch assessment reports');
            }
        };

        fetchAssessmentReports();
    }, [section, token]);

    return (
        <div>
            <h2>Assessment Report</h2>
            {error && <Error>{error}</Error>}
            <Table>
                <thead>
                    <tr>
                        <Th>Assessment ID</Th>
                        <Th>Name</Th>
                        <Th>Date</Th>
                        <Th>Score</Th>
                    </tr>
                </thead>
                <tbody>
                    {assessmentReports.length > 0 ? (
                        assessmentReports.map((report) => (
                            <tr key={report.assessmentId}>
                                <Td>{report.assessmentId}</Td>
                                <Td>{report.name}</Td>
                                <Td>{report.date}</Td>
                                <Td>{report.score}</Td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Td colSpan="4">No assessment reports available</Td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default AssessmentReport;
