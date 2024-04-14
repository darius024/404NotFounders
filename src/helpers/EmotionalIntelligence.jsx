import React from 'react';
import styled from 'styled-components';
import EI from '../images/EI.png';
import Recording from '../images/Recording.mp4';

const EventDescription = styled.div`
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
    margin: 20px;
`;

const Heading = styled.h3`
    margin-top: 20px;
`;

const Paragraph = styled.p`
    margin-bottom: 15px;
`;

const BulletList = styled.ul`
    list-style-position: inside;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 5px;
`;

const StyledLabel = styled.li`
    padding: 10px 0px;
    margins: 10px 10px;
    font-size: 18px;
`;

const EmotionalIntelligence = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className="course-info" style={{ width: '30%', padding: '20px', backgroundColor: '#3f3d56', color: 'white' }}>
                <h2>Training Information</h2>
                <ul style={{padding: '20px'}}>
                    <StyledLabel><strong>Hours:</strong> 10 hours</StyledLabel>
                    <StyledLabel><strong>Language:</strong> EngStyledLabelsh</StyledLabel>
                    <StyledLabel><strong>Videos:</strong> 2</StyledLabel>
                    <StyledLabel><strong>Materials:</strong> 5</StyledLabel>
                    <StyledLabel><strong>Speakers:</strong> John Doe, Jane Smith</StyledLabel>
                    <StyledLabel><strong>Date:</strong>Any Time</StyledLabel>
                    <StyledLabel><strong>Difficulty:</strong> Intermediate</StyledLabel>
                </ul>
            </div>
            <div className="event-details" style={{ width: '70%', padding: '40px' }}>
                <div className="title-box" style={{ backgroundColor: '#957dad', padding: '20px', borderRadius: '10px' }}>
                    <h1 className="event-title" style={{ fontSize: '36px', color: 'white', padding: '0px 10px 10px 0px' }}>Emotional Intelligence Mastery Workshop</h1>
                    <EventDescription>
                        <Heading>Description:</Heading>
                        <Paragraph>Discover the profound impact of emotional intelligence (EI) on personal and professional success in our comprehensive Emotional Intelligence Mastery Workshop. Throughout this immersive experience, participants will delve deep into the principles of EI, gaining practical techniques to enhance self-awareness, self-regulation, social awareness, and relationship management.</Paragraph>

                        <Heading>What You Will Learn:</Heading>
                        <BulletList>
                            <ListItem>Understand the core components of emotional intelligence and their significance in various aspects of life.</ListItem>
                            <ListItem>Develop self-awareness to recognize and understand your own emotions and their impact on thoughts, behaviors, and interactions.</ListItem>
                            <ListItem>Cultivate self-regulation techniques to manage impulses, control emotions, and adapt to challenging situations effectively.</ListItem>
                            <ListItem>Enhance social awareness to empathize with others, navigate social dynamics, and build meaningful connections.</ListItem>
                            <ListItem>Master relationship management skills to communicate assertively, resolve conflicts constructively, and foster trust and collaboration in professional relationships.</ListItem>
                        </BulletList>

                        <Heading>Skills You Will Acquire:</Heading>
                        <BulletList>
                            <ListItem>Enhanced self-awareness and introspective abilities to navigate personal and professional challenges with clarity and confidence.</ListItem>
                            <ListItem>Improved self-regulation techniques to manage stress, regulate emotions, and maintain composure in high-pressure situations.</ListItem>
                            <ListItem>Heightened social awareness to understand others' perspectives, build empathy, and foster harmonious relationships in diverse environments.</ListItem>
                            <ListItem>Enhanced relationship management skills to communicate effectively, resolve conflicts diplomatically, and cultivate positive interpersonal connections.</ListItem>
                        </BulletList>

                        <Heading>Why This Content Is Relevant:</Heading>
                        <Paragraph>In today's fast-paced and interconnected world, emotional intelligence is a crucial asset for success in both personal and professional domains. As organizations increasingly prioritize soft skills and interpersonal competencies, individuals equipped with high emotional intelligence are better positioned to thrive in diverse work environments, lead with empathy and authenticity, and navigate complex social dynamics with finesse.</Paragraph>

                        <Heading>How It Will Benefit You in the Long Run:</Heading>
                        <Paragraph>By investing in your emotional intelligence through our Mastery Workshop, you are laying the foundation for long-term personal and professional growth and fulfillment. Acquiring advanced emotional intelligence skills will not only enhance your leadership capabilities, decision-making prowess, and conflict resolution skills but also deepen your understanding of yourself and others, leading to more meaningful relationships, heightened resilience, and sustainable success in all facets of life.</Paragraph>
                    </EventDescription>
                </div>
                <div className="materials-box" style={{ marginTop: '40px', marginBottom: '60px' }}>
                    <h2 style={{ color: '#957dad', marginBottom: '10px' }}>Materials</h2>
                    <ul>
                        <li><a href="#">Workbook</a></li>
                        <li><a href="#">Presentation Slides</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Road Map</a></li>
                        <img src={EI} style={{ marginTop: '20px' }}></img>
                        {/* Add more downloadable materials here */}
                    </ul>
                </div>
                <div className="recording-box" style={{ marginTop: '20px' }}>
                    <h2 style={{ color: '#957dad' }}>Recording</h2>
                    <video controls style={{ width: '30%' }}>
                        <source src={Recording} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default EmotionalIntelligence;
