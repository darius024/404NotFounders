import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const Container = styled.div`
  margin: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-family: Arial, calibri;
  text-align: justify;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 5px;
`;

const Progress = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
`;

const Description = styled.div`
  margin: 10px 0;
  padding: 20px 20px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 15px;
  background-color: #2110AA;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Component Definition
const SectionElement = ({ title, description, buttonLink, progress }) => {
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate(); 

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleButtonClick = () => {
    navigate(buttonLink);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleDescription}>
        <Title>{title}</Title>
        <Progress>{progress}%</Progress>
      </TitleContainer>
      <Description show={showDescription}>
        <div>
        {description}
        </div>
        <Button onClick={handleButtonClick}>Improve yourself</Button>
      </Description>
    </Container>
  );
};

export default SectionElement;
