import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #9370db; /* Medium Purple */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  color: white;
  font-weight: bold;
`;

export const TableData = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export const Message = styled.p`
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 20px;
`;

export const DateHeader = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
  text-align: left;
`;

