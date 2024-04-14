import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
`;

const ChatHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
`;

const MessageItem = styled.div`
  display: flex;
  justify-content: ${props => props.fromMe ? 'flex-end' : 'flex-start'};
  margin: 5px 0;
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: ${props => props.fromMe ? '#DCF8C6' : '#ECECEC'};
  word-wrap: break-word;
`;

const InputContainer = styled.div`
  padding: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ChatInterface = ({ activeChat }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMsg = { text: newMessage, fromMe: true };
            setMessages([...messages, newMsg]);
            setNewMessage('');

            // Simulate an instant reply
            setTimeout(() => {
                setMessages(messages => [...messages, { text: `Reply to "${newMessage}"`, fromMe: false }]);
            }, 500);
        }
    };

    return (
        <Container>
            <ChatHeader>{activeChat.name}</ChatHeader>
            <MessageList>
                {messages.map((msg, index) => (
                    <MessageItem key={index} fromMe={msg.fromMe}>
                        <MessageBubble fromMe={msg.fromMe}>{msg.text}</MessageBubble>
                    </MessageItem>
                ))}
            </MessageList>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
            </InputContainer>
        </Container>
    );
};

export default ChatInterface;
