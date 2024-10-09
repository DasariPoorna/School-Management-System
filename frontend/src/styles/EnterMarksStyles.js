import styled from 'styled-components';

export const EnterMarksContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Option = styled.option``;

export const SubmitButton = styled.button`
  background-color: #008cba;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
  
  &:hover {
    background-color: #005f6a;
  }
`;

export const DownloadButton = styled(SubmitButton)`
  background-color: #4caf50;
  
  &:hover {
    background-color: #45a049;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 20px;
`;

export const ButtonSpacer = styled.div`
  display: inline-block;
  width: 20px; /* Adjust the spacing here */
`;

export const ActiveButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#008cba' : '#e0e0e0')};
  color: ${(props) => (props.isActive ? 'white' : '#333')};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  
  &:hover {
    background-color: ${(props) => (props.isActive ? '#005f6a' : '#ccc')};
  }
`;

export const InactiveButton = styled(ActiveButton)`
  background-color: ${(props) => (props.isActive ? '#008cba' : '#e0e0e0')};
  color: ${(props) => (props.isActive ? 'white' : '#333')};
`;

export const Header = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
