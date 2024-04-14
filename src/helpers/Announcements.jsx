import React from 'react';
import styled from 'styled-components';

const AnnouncementsContainer = styled.div`
background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 10px;
  margin: 10px;
  width: 30%;
  flex: 1 0 200px;
`;

const Announcement = styled.p`
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid #eee;
&:last-child {
  border-bottom: none;
}
font-size: 12px;
color: #444;
`;

const Announcements = () => {
    return (
        <AnnouncementsContainer>
            <h2>New Announcements</h2>
            <Announcement>Save the Date! We are thrilled to invite you to our Networking Night, taking place on the 27th of June at our company. Join us for a day of meeting exciting people, networking opportunities, and insightful discussions with industry experts. Registration details and agenda will be available soon.</Announcement>
            <Announcement>We are excited to announce the launch of our latest product, TechGuard 360! Designed to provide comprehensive cybersecurity solutions for small and medium-sized businesses, TechGuard 360 offers advanced threat detection, secure data backup, and real-time monitoring. This innovative solution will revolutionize the way our customers protect their digital assets and safeguard their businesses from cyber threats.</Announcement>
            <Announcement>We are committed to giving back to the community and are excited to announce our upcoming partnership with Habitat for Humanity. Through this initiative, we will sponsor and participate in building homes for families in need, making a positive impact on housing stability and community development. Learn how you can get involved and support our efforts to create lasting change.</Announcement>
        </AnnouncementsContainer>
    );
};

export default Announcements;
