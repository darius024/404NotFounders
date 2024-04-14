import React, { useState } from 'react';
import styled from 'styled-components';
import EmployeeList from '../helpers/EmployeeList';
import ChatInterface from '../helpers/ChatInterface';
import Profile from '../helpers/Profile';
import ProfilePic from '../images/Profile.png';

const ChatContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 100vh;
  width: 100vw;
`;

const Chat = () => {
  const [chatWith, setChatWith] = useState(null);
  const [viewingProfile, setViewingProfile] = useState(null);
  const employees = [
    { id: 1, name: 'Alice Johnson', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 2, name: 'Bob Smith', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 3, name: 'Charlie Brown', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 4, name: 'David Wilson', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 5, name: 'Emma Jones', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 6, name: 'Fiona White', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 7, name: 'George Harris', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 8, name: 'Hannah Martin', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 9, name: 'Ian Clark', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 10, name: 'Julia King', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 11, name: 'Kyle Lee', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 12, name: 'Laura Green', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 13, name: 'Matt Young', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 14, name: 'Nina Scott', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 15, name: 'Oscar Adams', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 16, name: 'Patty Thompson', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 17, name: 'Quincy Allen', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 18, name: 'Rachel Baker', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 19, name: 'Steve Mitchell', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 20, name: 'Tina Turner', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 21, name: 'Uma Rivera', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 22, name: 'Victor Edwards', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 23, name: 'Wendy Collins', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 24, name: 'Xavier Hill', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 25, name: 'Yvonne Moore', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 26, name: 'Zach Cooper', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 27, name: 'Amber Foster', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 28, name: 'Bruce Carter', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 29, name: 'Cindy Morris', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' },
    { id: 30, name: 'Derek Murphy', image: ProfilePic, position: 'CEO', department: 'Management', email: 'myemail@mycompany.com', phone: '0123456789' }
];

  return (
    <ChatContainer>
      <EmployeeList employees={employees} setChatWith={setChatWith} viewProfile={setViewingProfile} />
      {chatWith && <ChatInterface activeChat={chatWith} />}
      {viewingProfile && <Profile employee={viewingProfile} />}
    </ChatContainer>
  );
};

export default Chat;
