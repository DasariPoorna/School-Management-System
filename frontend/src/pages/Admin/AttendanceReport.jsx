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

const AttendanceReport = ({ section, token }) => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://zawadi-project.onrender.com/api/attendance-records?section=${section}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch attendance records');
            }
            return response.json();
        })
        .then(data => {
            // Ensure data is an array
            if (Array.isArray(data)) {
                setAttendanceRecords(data);
            } else {
                throw new Error('Invalid data format');
            }
        })
        .catch(error => setError(error.message));
    }, [section, token]);

    return (
        <div>
            <h2>Attendance Report</h2>
            {error && <Error>{error}</Error>}
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.length > 0 ? (
                        attendanceRecords.map((record, index) => (
                            <tr key={index}>
                                <Td>{record.studentId}</Td>
                                <Td>{record.name}</Td>
                                <Td>{record.date}</Td>
                                <Td>{record.status}</Td>
                            </tr>
                        )) 
                    ) : (
                        <tr>
                            <Td colSpan="4">No records found</Td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default AttendanceReport;
