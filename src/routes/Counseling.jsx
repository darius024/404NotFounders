import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../images/Profile.png';

// Styled components for layout and design
const ProfileContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const EventsContainer = styled.div`
  margin-top: 20px;
`;

const EventItem = styled.div`
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

function Counseling() {

  const mentors = [
    { id: 1, name: 'Marco Polo', specialization: 'Psychology of the adult brain, inner-self, personality research', contact: 'myemail@gmail.com' },
    { id: 2, name: 'Thomas Heinis', specialization: 'Big data expert, database systems, data science and technology', contact: 'myemail@gmail.com' },
    { id: 3, name: 'Yechan You', specialization: 'Team management, conflict resolution, goal setting expert', contact: 'myemail@gmail.com' },
    { id: 4, name: 'Michael Simon', specialization: 'Work-life balance researcher, highly passionate to share ideas', contact: 'myemail@gmail.com' },
    { id: 5, name: 'Dorothy van Bakel', specialization: 'Business analytics, financial advisor, economist', contact: 'myemail@gmail.com' }
  ];


  return (
    <ProfileContainer>
      <EventsContainer>
        <h2 style={{ marginBottom: '10px' }}>Our Network</h2>
        {mentors.map(mentor => (
          <EventItem key={mentor.id}>
            <h3>{mentor.name}</h3>
            <p>Specialization: {mentor.specialization}</p>
            <p>Contact: {mentor.contact}</p>
          </EventItem>
        ))}
      </EventsContainer>
      <hr style={{ height: '5px', backgroundColor: '#000', border: 'none' }}></hr>
    </ProfileContainer>
  );
}

export default Counseling;
