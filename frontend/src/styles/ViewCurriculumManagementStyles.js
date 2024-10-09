import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const CollapseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 5px;
  display: block;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const CurriculumContent = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
`;

export const SubtopicsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SubtopicItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`;

export const ProgressBarContainer = styled.div`
  margin-top: 20px;
`;

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #007bff;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TimetableButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export const TimetableContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
`;

export const GradeBox = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
`;

export const PDFDownloadButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProgressCircle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
  }

  circle {
    fill: none;
    stroke-width: 10;
    stroke: #76c7c0;
    stroke-linecap: round;
    transform-origin: center;
  }

  circle:nth-child(1) {
    stroke: #e0e0e0;
  }

  circle:nth-child(2) {
    stroke: #76c7c0;
    stroke-dasharray: 282.743;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: #333;
  }
`;


