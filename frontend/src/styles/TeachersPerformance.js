import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: #4a90e2;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin: 0;
`;

export const Breadcrumb = styled.div`
  font-size: 16px;
  color: #cfe3f5;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const DateRangeSelector = styled.div`
  font-size: 16px;
  color: #fff;

  select {
    padding: 5px 10px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #f7f9fc;
  border-right: 2px solid #e0e0e0;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CollapseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 15px;
  display: block;
  text-align: left;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    color: #007bff;
    background-color: #f0f4f8;
    padding-left: 10px;
    transition: all 0.3s ease;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchFilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  flex: 1;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
`;

export const CompletionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  th, td {
    border-bottom: 1px solid #e0e0e0;
    padding: 15px;
    text-align: left;
    font-size: 16px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  th {
    background-color: #f7f9fc;
    font-weight: bold;
  }

  td {
    background-color: #fff;
  }
`;

export const TableHeader = styled.th`
  background-color: #f7f9fc;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f4f8;
  }
`;

export const TableCell = styled.td`
  font-size: 16px;
  padding: 15px;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BarChart = styled.div`
  width: 48%;
  height: 200px;
  background-color: #4a90e2;
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PieChart = styled.div`
  width: 48%;
  height: 200px;
  background-color: #ff7f50;
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
