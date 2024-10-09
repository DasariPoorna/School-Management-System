// ParentComponent.jsx
import React from 'react';
import StudentForm from './ReportForm';

const ParentComponent = () => {
  const handleFormSubmit = (data) => {
    // Handle the form data submission logic here
    console.log('Form data submitted:', data);
  };

  return (
    <div>
      <h1>Submit Report</h1>
      < StudentForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ParentComponent;


// import React, { useState } from 'react';
// import StudentForm from './ReportForm';
// import StudentReport from './ReportData'
// import { Container, Title } from '../../styles/ReportStyles.js';

// const App = () => {
//   const [studentData, setStudentData] = useState(null);

//   const handleStudentData = (data) => {
//     setStudentData(data);
//   };

//   return (
//     <Container>
//       <Title>Student Report Application</Title>
//       <StudentForm onSubmit={handleStudentData} />
//       {studentData && <StudentReport data={studentData} />}
//     </Container>
//   );
// };

// export default App;
