import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from '../routes/Home';
import styled from 'styled-components';

const StyledForm = styled.div`
  background: linear-gradient(135deg, #91eae4, #7f7fd5);
  padding: 20px;
  width: 100%;
  max-width: 320px;
  margin: 50px auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h2`
  color: #fff;
  text-align: center;
`;

const FormLabel = styled.label`
  color: #f0f8ff;
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #5643fa;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4231b7;
  }
`;

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dictionary = new Map([
        ['darius', 'darius'],
        ['patrick', 'patrick'],
        ['bogdan', 'bogdan'],
        ['stefi', 'stefi']
    ]);

    const handleLogin = () => {
        if (dictionary.get(username) === password) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };
    const navigate = useNavigate();

    if (isLoggedIn) {
        navigate('/');
    }

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={isLoggedIn ? <Home /> : <LoginForm username={username} setPassword={setPassword} setUsername={setUsername} password={password} handleLogin={handleLogin} />}
            />
        </Routes>
    );
}

function LoginForm({ username, password, setUsername, setPassword, handleLogin }) {
    return (
        <StyledForm>
            <FormTitle>Login</FormTitle>
            <div>
                <FormLabel>Username:</FormLabel>
                <FormInput type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <FormLabel>Password:</FormLabel>
                <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </StyledForm>
    );
}

export default UserLogin;
