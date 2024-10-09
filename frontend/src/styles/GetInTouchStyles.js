import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 50px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ADD8E6, #9370DB); /* Light Blue to Medium Purple */
  border-radius: 10px;
  margin: 0;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #000;
    border-radius: 12px;
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 48%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  box-sizing: border-box;
  color: #FFFFFF;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const FullWidthInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  box-sizing: border-box;
  color: #FFFFFF;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  color: #FFFFFF;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const Button = styled.button`
  background-color: #fdbb2d;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa500;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }
`;

export const ContactInfo = styled.div`
  flex: 0.5;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    margin-top: 30px;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContactDetails = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 2;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
    }
  }

  svg {
    margin-right: 10px;

    @media screen and (max-width: 768px) {
      margin-right: 8px;
    }
  }
`;
