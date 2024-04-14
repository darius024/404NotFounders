import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeRank from '../helpers/EmployeeRank';

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const RankList = styled.div`
  margin-top: 20px;
`;

function Leaderboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchedEmployees = [
      { id: 1, name: 'John Doe', score: 120, iconPath: '/path/to/first/icon.svg' },
      { id: 2, name: 'Jane Smith', score: 115, iconPath: '/path/to/second/icon.svg' },
      { id: 3, name: 'Alice Johnson', score: 110, iconPath: '/path/to/third/icon.svg' },
      { id: 4, name: 'Maria Popa', score: 90, iconPath: '/path/to/first/icon.svg' },
      { id: 5, name: 'Mozart Amadeus', score: 70, iconPath: '/path/to/second/icon.svg' },
      { id: 6, name: 'Mozaic Stefania', score: 69, iconPath: '/path/to/third/icon.svg' },
      // More employees...
    ];
    setEmployees(fetchedEmployees.sort((a, b) => b.score - a.score)); // Sort by score descending
  }, []);

  return (
    <Container>
      <Title>Who developed the  most this week?</Title>
      <RankList>
        {employees.map((employee, index) => (
          <EmployeeRank key={employee.id} rank={index + 1} employee={employee} />
        ))}
      </RankList>
    </Container>
  );
}

export default Leaderboard;
