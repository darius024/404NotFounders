import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  h2 {
    font-size: 24px;
    color: #444;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid #666;
    margin-bottom: 20px;
  }

  img {
    width: auto;
    height: 50px;
  }
`;

// Stats Components
export const StatsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 10px;
  width: 30%;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Image = styled.img`
  margin-right: 15px;
  border-radius: 50%;
`;

// Blog Components
export const BlogContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 10px;
  width: 30%;
  overflow-y: auto;
`;

export const Post = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-top: 0;
    color: #365899;
  }

  p {
    margin-bottom: 0;
    color: #666;
  }
`;

// Announcements Components
export const AnnouncementsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 10px;
  width: 30%;
`;

export const Announcement = styled.p`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  font-size: 16px;
  color: #444;
`;
