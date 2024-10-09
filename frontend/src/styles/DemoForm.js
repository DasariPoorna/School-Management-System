import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100vw;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
`;

export const Title = styled.h2`
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: #FFFFFF;
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  font-size: 16px;
  color: #FFFFFF;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #FFFFFF;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  font-size: 16px;
  color: #FFFFFF;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #FFFFFF;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #FFA500;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF7F50;
  }
`;
