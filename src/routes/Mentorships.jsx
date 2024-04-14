import React, { useState } from 'react';
import EventListItem from '../helpers/EventListItem';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  flex-grow: 1;
  margin-right: 50px
`;

const PanelContainer = styled.div`
  width: 900px;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 10px;
`;

const EventPanel = styled.ul`
  list-style: none;
  margins: 10px;
`;

const EventPanelItem = styled.li`
  margin: 10px 0;
  padding: 15px;
  background-color: cyan;
  border: 2px solid #dee2e6;
  border-radius: 6px;
`;

const Mentorships = () => {
  const [addedEvents, setAddedEvents] = useState([]);

  const handleAddEvent = title => {
    setAddedEvents(prev => [...prev, title]);
  };

  return (
    <PageContainer>
      <ListContainer>
        <EventListItem
          title="Goal Setting and Achievement Workshop"
          description="Learn effective goal-setting techniques and strategies to clarify your career objectives and map out a path for
          success. Work closely with a mentor to set SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals, track progress, and celebrate achievements along the way."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
        <EventListItem
          title="Networking Mastery Session"
          description="Hone your networking skills and expand your professional connections with guidance from seasoned mentors. Discover best practices for building and nurturing
          meaningful relationships, leveraging social platforms, and maximizing networking opportunities to advance your career."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
        <EventListItem
          title="Leadership Development Mentorship Program"
          description="Develop essential leadership competencies and unlock your potential as a future leader through one-on-one mentorship. Gain insights into effective leadership
          styles, communication strategies, decision-making processes, and team management techniques to excel in leadership roles."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
        <EventListItem
          title="Financial Literacy Coaching"
          description="Acquire essential financial knowledge and skills to make informed decisions about your personal and professional finances. Work with a mentor to understand
          budgeting, investment strategies, retirement planning, and debt management, empowering you to achieve financial security and stability."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
        <EventListItem
          title="Intrapreneurship Incubator"
          description="Explore intrapreneurial opportunities within your organization and unleash your creativity, innovation, and entrepreneurial mindset with mentorship support.
          Collaborate with mentors to identify and develop innovative solutions, drive organizational change, and create value within your company."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
        <EventListItem
          title="Technology Proficiency Mentorship"
          description="Enhance your technology proficiency and adaptability with guidance from tech-savvy mentors. Learn to leverage digital tools, software applications, and emerging
          technologies to streamline workflows, boost productivity, and stay competitive in a rapidly evolving digital landscape."
          onAdd={handleAddEvent}
          path='/mentorships'
        />
      </ListContainer>
      <PanelContainer>
        <h3 style={{fontSize: '22px'}}>Mentorships Interested In</h3>
        <EventPanel>
          {addedEvents.map((event, index) => (
            <EventPanelItem key={index}>{event}</EventPanelItem>
          ))}
        </EventPanel>
      </PanelContainer>
    </PageContainer>
  );
};

export default Mentorships;
