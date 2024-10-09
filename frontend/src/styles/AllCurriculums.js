import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    padding-left: 100px;
`;

export const CurriculumSection = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
`;

export const CurriculumContent = styled.div`
    max-width: 80%;
`;

export const LessonPlan = styled.div`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Schedule = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const IconGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #007BFF;
    &:hover {
        color: #0056b3;
    }
`;
