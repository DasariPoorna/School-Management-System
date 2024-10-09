import styled from 'styled-components';

export const LessonPlansContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const LessonPlan = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LessonTitle = styled.h3`
  color: #34495e;
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const LessonContent = styled.p`
  color: #7f8c8d;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const LessonForm = styled.form`
  margin-top: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LessonInput = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
`;

export const LessonTextarea = styled.textarea`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
  height: 150px;
  resize: none;
`;

export const Select = styled.select`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
  color: #34495e; /* Text color set to black */
`;

export const AddLessonButton = styled.button`
  padding: 12px 25px;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #1f6391;
  }
`;

export const ViewLessonPlansButton = styled.button`
  padding: 12px 25px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #c0392b;
  }
`;

export const LessonPlansContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LessonPlansHeader = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2em;
  /* Align header with the form */
  margin-left: 20px; /* Adjust as needed */
`;

export const LessonPlansList = styled.div`
  width: 100%;
  max-width: 800px;
`;



export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #c0392b;
  }
`;

export const UpdateButton = styled.button`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #1e8449;
  }
`;


export const DownloadLessonPlansButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


export const GradeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const GradeItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  text-align: center;
  h3 {
    margin-bottom: 10px;
    color: #34495e;
    font-size: 1.2em;
  }
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;


// Individual subject item
export const SubjectItem = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

// Subject title
export const SubjectTitle = styled.h4`
  margin: 0;
`;

// Subject link to download lesson plan
export const SubjectLink = styled.a`
  color: #2196F3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Subject list container
export const SubjectList = styled.div`
  margin-top: 20px;
`;

export const ClassSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;  /* Change to a visible background color */
  color: #333;  /* Ensure the text is visible */
  font-size: 16px;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  option {
    background-color: #black;  /* Ensure the options have a visible background color */
    color: #333;  /* Ensure the text is visible in options */
  }
`;