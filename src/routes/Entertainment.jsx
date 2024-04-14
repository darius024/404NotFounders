import React, { useState } from 'react';
import EventItem from '../helpers/EventItem';
import EventList from '../helpers/EventList';
import CreateEventForm from '../helpers/CreateEventForm';
import styled from 'styled-components';

// Styled component for the container
const Container = styled.div`
  padding: 20px;
`;

function Entertainment() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Hiking Adventure', description: 'Join us for a fun hiking day in Bucegi Mountains to visit the wonders of nature', participants: ['Maria', 'Sergiu'] },
    { id: 2, name: 'Horse Riding', description: 'If you are interested in riding, come along together at the Rose Farm for equestrian lessons on Saturday.', participants: ['Alex'] }
  ]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1, participants: [] }]);
  };

  const updateParticipants = (eventId, participantName) => {
    const newEvents = events.map(event => {
      if (event.id === eventId) {
        return { ...event, participants: [...event.participants, participantName] };
      }
      return event;
    });
    setEvents(newEvents);
  };

  return (
    <Container>
      <h1 style={{ marginBottom: '10px' }}>Create and Engage in Events</h1>
      <CreateEventForm addEvent={addEvent} />
      <hr style={{ height: '3px', backgroundColor: '#000', border: 'none', marginBottom: '50px', marginTop: '50px' }}></hr>
      {events.map(event => (
        <EventItem key={event.id} event={event} updateParticipants={updateParticipants} />
      ))}
    </Container>
  );
}

export default Entertainment;
