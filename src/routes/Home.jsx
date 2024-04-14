import React from "react";
import styled from 'styled-components';
import SectionElement from '../helpers/SectionElement';

const Title = styled.h1`
font-size: 30px;
font-weight: bold;
color: black;
`;

const Par = styled.p`
font-size: 20px;
text-align: justify;
margins: 100px 100px;
padding: 20px 20px;
`;

const Hr = styled.hr`
  border: none;
  height: 2px;
  background-color: #ccc;
  padding: 2px 2px;
  margins: 50px 50px;
`;

const Title1 = styled.h1`
font-size: 30px;
font-weight: bold;
color: black;
margin: 50px 0 0 0;
`;

const Home = () => {
  return (
    <div>
      <Title>
        Sections
      </Title>
      <Hr></Hr>
      <SectionElement
        title="Trainings"
        description="Personal development trainings are exactly what you need
        to improve yourself and your potential. These are the principal sessions
        you need for long-lasting results and endless balance. From emotional
        intelligence, time management, conflict resolution to decision making, mindfulness,
        nutrition, adaptability and more, the trainings provide you with every piece of informatio
        needed to develop your soft skills and inborn aptitudes."
        buttonLink='/trainings'
        progress="20"
      />
      <SectionElement
        title="Mentorships"
        description="If you seek career development, these mentorships offer exactly that.
        Online speed mentoring and one-to-one mentoring sessions are just a couple of services
        we provide here. We offer opportunities in guidance and advice, skill development, goal setting, networking,
        leadership skills, financial literacy and more."
        buttonLink='/mentorships'
        progress="0"
      />
      <SectionElement
        title="Conferences"
        description="Conferences are the right places if you seek short and to-the-point learning sessions in both personal
        and career development. They offer very niched topics that you can engage with during the pre-recorded materials and
        online sessions. They also enable you to actively engage with the materials, ask questions, request support and more."
        buttonLink='/conferences'
        progress="60"
      />
      <SectionElement
        title="1-to-1 Counseling"
        description="Personal counseling is our most remarkable asset, fostering a safe environment between employees and speciliazed
        personnel. These are 1-to-1 both online and in-person confidential counseling services aimed at 
        employees who are willing to engage with them, either for solving some of their issues, or
        just for curiosity. The counseling also includes mental health sessions, health and nutritional
        professionals, life coaching, parents' programme and so much more."
        buttonLink='/1-to-1-counseling'
        progress="75"
      />
      <SectionElement
        title="Digital Resources"
        description="We offer a place with all digital resources needed to help you develop in all the topics
        discussed above. From books, articles, stories to tutorials, talks and recordings, we gathered
        a collection that we are confident will help everyone. These are materials available all
        the time that can be read at your own pace."
        buttonLink='/digital-resources'
        progress="5"
      />
      <SectionElement
        title="Cultural Events"
        description="Cultural Events are your company's own choice of selected activities
        to do around your city, from enjoying a thetre play to visiting parks and
        museums. The range is very wide and versatile, and allows you to freely
        entertain yourself while learning something new."
        buttonLink='/cultural-events'
        progress="100"
      />


      <Title1>
        Our Company
      </Title1>
      <Hr></Hr>
      <Par>
        We are at the forefront of the industry, dedicated to delivering innovative solutions that drive success and enhance efficiency for businesses worldwide. Established by visionary leaders passionate about technology and service excellence, our company has grown into a revered entity known for its pioneering approaches and transformative technologies.
      </Par>
      <Par>
        Our mission is to empower our clients by providing state-of-the-art products and services that solve real-world problems and deliver tangible results. With a commitment to quality and innovation, our offerings span across multiple domains including cloud computing, data analytics, and cybersecurity, helping clients to not only meet but exceed their strategic objectives.
      </Par>
      <Par>
        Our team of over 300 talented professionals is our greatest asset. Cultivated on a foundation of diversity, integrity, and collaboration, our workplace is a dynamic ecosystem where creativity and expertise flourish. Each member is dedicated to upholding our high standards and driving the continuous evolution of our portfolio.
      </Par>
      <Par>
        Corporate responsibility and sustainability are at the core of our operations. We are committed to ethical practices, community engagement, and environmental stewardship, continually seeking new ways to reduce our carbon footprint and positively impact society.
      </Par>
      <Par>
        As we look to the future, we are excited to continue our journey of innovation and excellence, forging partnerships and exploring new horizons in technology and beyond. We remain dedicated to enhancing our customers' business operations and contributing positively to the broader global community.
      </Par>
    </div>
  )
};
export default Home;