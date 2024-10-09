import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

// const Container = styled.div`
//   padding: 20px;
//   background-color: #f4f4f4;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const Header = styled.h2`
//   text-align: center;
//   color: #333;
//   margin-bottom: 20px;
//   font-size: 2rem;
//   font-weight: 700;

//   @media screen and (max-width: 768px) {
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//   }
// `;

// const TableWrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   background: #fff;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   overflow-x: auto;
//   margin-bottom: 20px;

//   @media screen and (max-width: 768px) {
//     box-shadow: none;
//     border-radius: 0;
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   min-width: 600px;
// `;

// const Thead = styled.thead`
//   background-color: #007bff;
//   color: #fff;
// `;

// const Th = styled.th`
//   padding: 15px;
//   text-align: left;
//   font-size: 1.1rem;
//   font-weight: 600;

//   @media screen and (max-width: 768px) {
//     padding: 10px;
//     font-size: 1rem;
//   }
// `;

// const Tbody = styled.tbody`
//   color: #333;
// `;

// const Tr = styled.tr`
//   &:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// `;

// const Td = styled.td`
//   padding: 15px;
//   text-align: left;
//   vertical-align: middle;
//   font-size: 1rem;

//   @media screen and (max-width: 768px) {
//     padding: 10px;
//     font-size: 0.9rem;
//   }
// `;

// const Loader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
// `;

// const StatusIcon = ({ status }) => {
//   return status === 'Present' ? (
//     <FaCheck color="green" />
//   ) : (
//     <FaTimes color="red" />
//   );
// };

// const Attendance = () => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/attendance', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setAttendanceData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch attendance data', error);
//         setLoading(false);
//       }
//     };

//     fetchAttendanceData();
//   }, [token]);

//   return (
//     <Container>
//       <Header>Attendance</Header>
//       {loading ? (
//         <Loader>
//           <FaSpinner size={32} className="fa-spin" />
//         </Loader>
//       ) : (
//         <TableWrapper>
//           <Table>
//             <Thead>
//               <tr>
//                 <Th>Student Name</Th>
//                 <Th>Date</Th>
//                 <Th>Status</Th>
//               </tr>
//             </Thead>
//             <Tbody>
//               {attendanceData.map((entry) => (
//                 <Tr key={entry.id}>
//                   <Td>{entry.student_name}</Td>
//                   <Td>{entry.attendance_date}</Td>
//                   <Td><StatusIcon status={entry.status} /></Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </TableWrapper>
//       )}
//     </Container>
//   );
// };

export default Attendance;
