import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #34495e;
  margin-bottom: 20px;
`;

export const GradeSection = styled.div`
  margin-bottom: 30px;
`;

export const GradeTitle = styled.h2`
  font-size: 20px;
  color: #2980b9;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ResourceForm = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  padding: 15px;
  background-color: #ecf0f1;
  color: #7f8c8d;
  border: 2px dashed #bdc3c7;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 16px;

  &:hover {
    background-color: #bdc3c7;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #27ae60;
  }
`;

export const FileName = styled.p`
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 10px;
  background-color: #ecf0f1;
  padding: 10px;
  border-radius: 5px;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin: 10px 0;
`;

export const ProgressBar = styled.div`
  height: 10px;
  background-color: #4caf50;
  border-radius: 5px;
  transition: width 0.4s ease;
`;

