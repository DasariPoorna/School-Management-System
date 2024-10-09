import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${props => props.primary ? '#4CAF50' : '#f44336'};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ReportContainer = styled.div`
  margin-top: 20px;
`;

export const ReportTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

export const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }
`;
