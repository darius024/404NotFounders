import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const EventItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const EventInfo = styled.div`
  margin-right: 50px;
  text-align: justify;
  font-size: 16px;
  padding: 0px 0px 10px 0px;
`;

const EventTitle = styled.h3`
  font-size: 24px;
  cursor: pointer;
  fontFamily: 'Montserrat, sans-serif';
  fontWeight: 'bold';
  padding: 0px 0px 10px 0px;
`;

const Button = styled.button`
  padding: 8px 30px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }
`;

const EventListItem = ({ title, description, onAdd, path }) => {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate(path);
    };

    return (
        <EventItemContainer>
            <EventInfo>
                <EventTitle onClick={handleTitleClick}>{title}</EventTitle>
                <p>{description}</p>
            </EventInfo>
            <Button onClick={() => onAdd(title)}>Add to List</Button>
        </EventItemContainer>
    );
};

export default EventListItem;
