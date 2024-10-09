import React, { useState } from 'react';
import {
  Layout,
  Dashboard,
  Header,
  Title,
  Breadcrumb,
  DateRangeSelector,
  Sidebar,
  CollapseButton,
  List,
  ListItem,
  MainContent,
  SearchFilterContainer,
  CompletionTable,
  ChartContainer,
  BarChart,
  PieChart,
} from '../../styles/TeachersPerformance.js';

const HeaderComponent = () => (
  <Header>
    <Title>Teachers' Performance Dashboard</Title>
    <Breadcrumb>Grade 1 / Math / Teacher: John Doe</Breadcrumb>
    <DateRangeSelector>
      <label>Date Range: </label>
      <select>
        <option>Today</option>
        <option>This Week</option>
        <option>This Month</option>
        <option>Custom Range</option>
      </select>
    </DateRangeSelector>
  </Header>
);

const SidebarComponent = () => {
  const [teachersExpanded, setTeachersExpanded] = useState(true);

  return (
    <Sidebar>
      <CollapseButton onClick={() => setTeachersExpanded(!teachersExpanded)}>
        {teachersExpanded ? '▼' : '▶'} Teachers
      </CollapseButton>
      {teachersExpanded && (
        <List>
          <ListItem>John Doe</ListItem>
          <ListItem>Jane Smith</ListItem>
          <ListItem>Bob Johnson</ListItem>
        </List>
      )}
    </Sidebar>
  );
};

const MainContentComponent = () => {
  const completionData = [
    { date: '2024-08-10', grade: 'Grade 1', subject: 'Math', topic: 'Algebra', status: 'Completed' },
    { date: '2024-08-09', grade: 'Grade 2', subject: 'Science', topic: 'Physics', status: 'In Progress' },
  ];

  return (
    <MainContent>
      <SearchFilterContainer>
        <input type="text" placeholder="Search teacher..." />
        <select>
          <option>All Grades</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
        </select>
        <select>
          <option>All Subjects</option>
          <option>Math</option>
          <option>Science</option>
        </select>
        <select>
          <option>All Status</option>
          <option>Completed</option>
          <option>In Progress</option>
        </select>
      </SearchFilterContainer>

      <CompletionTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Grade</th>
            <th>Subject</th>
            <th>Topic</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {completionData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.grade}</td>
              <td>{data.subject}</td>
              <td>{data.topic}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </CompletionTable>

      <ChartContainer>
        <BarChart>Bar Chart</BarChart>
        <PieChart>Pie Chart</PieChart>
      </ChartContainer>
    </MainContent>
  );
};

const TeachersPerformanceDashboard = () => (
  <Layout>
    <SidebarComponent />
    <Dashboard>
      <HeaderComponent />
      <MainContentComponent />
    </Dashboard>
  </Layout>
);

export default TeachersPerformanceDashboard;
