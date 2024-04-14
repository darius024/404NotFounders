import React, { useState } from 'react';
import EventListItem from '../helpers/EventListItem';
import styled from 'styled-components';
import EmotionalIntelligence from '../helpers/EmotionalIntelligence';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  flex-grow: 1;
  margin-right: 50px
`;

const PanelContainer = styled.div`
  width: 800px;
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
  background-color: plum;
  border: 2px solid #dee2e6;
  border-radius: 6px;
`;

const Trainings = () => {
  const [addedEvents, setAddedEvents] = useState([]);

  const handleAddEvent = title => {
    setAddedEvents(prev => [...prev, title]);
  };

  return (
    <PageContainer>
      <ListContainer>
        <EventListItem
          title="Emotional Intelligence Workshop"
          description="Learn how to recognize, understand, and manage
          emotions effectively in both personal and professional settings. Develop
          skills in empathy, self-awareness, and relationship management to enhance teamwork and leadership capabilities."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
        <EventListItem
          title="Time Management Seminar"
          description="Master techniques and strategies for optimizing time usage and prioritizing tasks effectively.
          Gain insights into setting goals, creating schedules, overcoming procrastination, and achieving work-life balance."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
        <EventListItem
          title="Conflict Resolution Training"
          description="Equip yourself with tools and strategies to effectively manage stress and resolve conflicts in the workplace.
          Develop resilience, communication skills, and conflict resolution techniques to foster a positive and productive work environment."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
        <EventListItem
          title="Advanced Interpersonal Communication Workshop"
          description="Enhance your interpersonal communication skills to build trust, foster collaboration, and navigate challenging conversations with confidence.
          Learn active listening techniques, empathetic communication strategies, and conflict management skills to strengthen professional relationships and drive success."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
        <EventListItem
          title="Strategic Decision-Making Masterclass"
          description="Enhance your decision-making abilities by mastering critical thinking and analytical skills. Learn to evaluate options, weigh risks, and make informed
          decisions aligned with organizational goals and objectives."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
        <EventListItem
          title="Work-Life Integration Strategies Workshop"
          description="Explore practical strategies for integrating work and personal life responsibilities to achieve balance and fulfillment. Learn techniques for setting boundaries
          managing priorities, and fostering well-being in all areas of life."
          onAdd={handleAddEvent}
          path='/trainings/emotional-intelligence'
        />
      </ListContainer>
      <PanelContainer>
        <h3 style={{fontSize: '22px'}}>Trainings Interested In</h3>
        <EventPanel>
          {addedEvents.map((event, index) => (
            <EventPanelItem key={index}>{event}</EventPanelItem>
          ))}
        </EventPanel>
      </PanelContainer>
    </PageContainer>
  );
};

export default Trainings;
