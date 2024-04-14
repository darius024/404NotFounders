import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfilePic from '../images/Profile.png';
import { AiOutlineProfile } from 'react-icons/ai';

const Container = styled.div`
  padding: 20px;
  width: 300px;
  height: 100vh;
  overflow: auto;
  background-color: #f0f0f0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const EmployeeItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #007BFF; // Blue color on hover
  }
`;

const EmployeeList = ({ employees, setChatWith, viewProfile }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = employees.filter(employee => employee.name.toLowerCase().includes(value));
    setFilteredEmployees(filtered);
  };

  return (
    <Container>
      <SearchInput placeholder="Search coworkers..." onChange={handleSearch} />
      {filteredEmployees.map(employee => (
        <EmployeeItem key={employee.id} onClick={() => setChatWith(employee)}>
          <span onClick={() => setChatWith(employee)}>{employee.name}</span>
          <ProfileButton onClick={() => viewProfile(employee)}>
            <img src={ProfilePic} style={{height: '20px', width: '20px'}}/>
          </ProfileButton>
        </EmployeeItem>
      ))}
    </Container>
  );
};

export default EmployeeList;
