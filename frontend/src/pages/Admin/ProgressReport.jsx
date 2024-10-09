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

const ProgressReport = ({ section, token }) => {
    const [progressReports, setProgressReports] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/api/progress?section=${section}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Log data to check format
            if (Array.isArray(data)) {
                setProgressReports(data);
            } else {
                setError('Unexpected data format');
            }
        })
        .catch(() => setError('Failed to fetch progress reports'));
    }, [section, token]);

    return (
        <div>
            <h2>Progress Report</h2>
            {error && <Error>{error}</Error>}
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Grade</Th>
                        <Th>Completion</Th>
                        <Th>Remarks</Th>
                    </tr>
                </thead>
                <tbody>
                    {progressReports.length > 0 ? (
                        progressReports.map((report, index) => (
                            <tr key={index}>
                                <Td>{report.studentId}</Td>
                                <Td>{report.name}</Td>
                                <Td>{report.grade}</Td>
                                <Td>{report.completion}</Td>
                                <Td>{report.remarks}</Td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Td colSpan="5">No progress reports available</Td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default ProgressReport;
