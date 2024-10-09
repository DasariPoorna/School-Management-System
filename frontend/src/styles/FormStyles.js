import styled from 'styled-components';

// Container for the form
export const FormContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Form title
export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

// Form field container
export const FieldContainer = styled.div`
  margin-bottom: 15px;
`;

// Form label
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

// Form input
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Form select (Dropdown)
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Button styles
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Add child button
export const AddChildButton = styled(Button)`
  background-color: #28a745;
  margin-left: 10px;

  &:hover {
    background-color: #218838;
  }
`;

// Child input container
export const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// Child input
export const ChildInput = styled(Input)`
  flex: 1;
`;

// Remove child button
export const RemoveChildButton = styled(Button)`
  background-color: #dc3545;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

// Responsive styles
export const ResponsiveContainer = styled.div`
  @media (max-width: 600px) {
    padding: 15px;
  }
`;


