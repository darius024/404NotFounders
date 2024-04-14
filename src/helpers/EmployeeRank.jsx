import React from 'react';
import styled from 'styled-components';

// Styled components for layout and design
const RankItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 0;
  background: #f0f0f8; // Soft background color
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px; // Adjust as necessary for your icons
  height: 50px;
  margin-right: 15px;
`;

const Name = styled.h2`
  margin: 0;
  color: #333;
  font-weight: 500;
`;

const Score = styled.span`
  font-size: 18px;
  color: #555;
  font-weight: bold;
`;

function EmployeeRank({ rank, employee }) {
  return (
    <RankItem>
      <Info>
        <Name>{rank}. {employee.name}</Name>
      </Info>
      <Score>{employee.score} Points</Score>
    </RankItem>
  );
}

export default EmployeeRank;
