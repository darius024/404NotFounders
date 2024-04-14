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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-right: 20px;
`;

const UserName = styled.h1`
  margin: 0;
`;

const UserBio = styled.p`
  color: #666;
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

function YourJourney() {
  const user = {
    name: 'Darius Aron',
    department: 'Marketing',
    bio: 'Passionate about technology and hackathons.',
    image: ProfilePic,
  };

  const events = [
    { id: 1, name: 'Community Cleanup' },
    { id: 2, name: 'Tech Conference 2024'}
  ];
  const courses = [
    { id: 1, name: 'Emotional Intelligence', category: 'Training', date: '28-01-2024' },
    { id: 2, name: 'Goals setting', category: 'Mentorship', date: '18-02-2024' },
    { id: 3, name: 'Cluj Theatre - O noapte furtunoasa', category: 'Cultural Events', date: '01-03-2024' }
  ]

  const benefits = [
    { id: 1, name: 'Worked 1 Hour Less', description: 'Allowed to leave one hour early as a reward for meeting all weekly targets.', date: '10-03-2024' },
    { id: 2, name: 'Salary Increase', description: 'Given a salary increase due to outstanding performance and extra effort throughout the year.', date: '01-04-2024' },
    { id: 3, name: 'Early Finish', description: 'Was allowed to finish work early after completing all tasks for the day ahead of schedule.', date: '15-04-2024' },
    { id: 4, name: 'Employee of the Month', description: 'Received employee of the month prize for exceptional work and dedication.', date: '20-04-2024' },
    { id: 5, name: 'Extra Break Time', description: 'Earned an extra break time as a bonus for consecutive months of high performance.', date: '05-05-2024' }
];


  return (
    <ProfileContainer>
      <UserInfo>
        <ProfilePicture src={user.image} alt="Darius Aron" />
        <div>
          <UserName>{user.name}</UserName>
          <UserBio>{user.department}</UserBio>
          <UserBio>{user.bio}</UserBio>
        </div>
      </UserInfo>
      <EventsContainer>
        <h2 style={{marginBottom: '10px'}}>History</h2>
        {courses.map(course => (
          <EventItem key={course.id}>
            <h3>{course.name}</h3>
            <p>Category: {course.category}</p>
            <p>Date: {course.date}</p>
          </EventItem>
        ))}
      </EventsContainer>
      <hr style={{height: '5px', backgroundColor: '#000', border: 'none'}}></hr>
      <EventsContainer>
        <h2 style={{marginBottom: '10px'}}>Benefits in the Company</h2>
        {benefits.map(benefit => (
          <EventItem key={benefit.id}>
            <h3>{benefit.name}</h3>
            <p>Description: {benefit.description}</p>
            <p>Date: {benefit.date}</p>
          </EventItem>
        ))}
      </EventsContainer>
      <hr style={{height: '5px', backgroundColor: '#000', border: 'none'}}></hr>
      <EventsContainer>
        <h2 style={{marginBottom: '10px'}}>Events Attending</h2>
        {events.map(event => (
          <EventItem key={event.id}>
            <h3>{event.name}</h3>
          </EventItem>
        ))}
      </EventsContainer>
    </ProfileContainer>
  );
}

export default YourJourney;
