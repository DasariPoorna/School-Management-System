// src/styles/TeacherSignInStyles.js
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const TeacherSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ loading }) =>
    loading &&
    css`
      &:after {
        content: '';
        position: absolute;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top: 2px solid #fff;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
        ${spin};
      }

      &:disabled {
        cursor: not-allowed;
      }
    `}
`;


// Add styling for eye icon
export const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
`;

const spin = css`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
