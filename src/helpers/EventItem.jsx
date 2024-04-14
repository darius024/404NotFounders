import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TitleButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
  display: block;

  &:hover {
    text-decoration: none;
    color: #555;
  }
`;

const Detail = styled.div`
  background-color: #f9f9f9;
  border-top: 2px solid #eee;
  padding: 10px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const JoinButton = styled.button`
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7b68ee;
  }
`;

const ParticipantsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const Participant = styled.li`
  padding: 5px;
  background-color: #e8e8e8;
  margin-bottom: 5px;
  border-radius: 4px;
`;

function EventItem({ event, updateParticipants }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleJoinEvent = (e) => {
        e.stopPropagation();
        updateParticipants(event.id, "Darius");
    };

    return (
        <Item>
            <TitleButton onClick={toggleDropdown}>
                {event.name}
            </TitleButton>
            <Detail isOpen={isOpen}>
                <p>{event.description}</p>
                <p>Participants: {event.participants.length}</p>
                <p>The participants are:
                    <ParticipantsList>
                        {event.participants.map((participant, index) => (
                            <Participant key={index}>{participant}</Participant>
                        ))}
                    </ParticipantsList>
                </p>
                <JoinButton onClick={handleJoinEvent}>Join</JoinButton>
            </Detail>
        </Item>
    );
}

export default EventItem;
