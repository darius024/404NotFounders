import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
background-color: #fff;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
padding: 20px;
margin: 10px;
width: 30%;
overflow-y: auto;
flex: 3 1 400px;
`;

const Post = styled.div`
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

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setPosts([
            { id: 1, title: 'New Sponsor in our Business department', description: 'A new sponsor displayed interest in financing our next events...' },
            { id: 2, title: 'Increase in Employees\' Productivity', description: 'A recent survey conducted in our company has resulted in amaziing results...' },
            { id: 3, title: '10 Innovative Ways Our Company is Reducing Environmental Footprint', description: 'Explore the eco-friendly initiatives your company has implemented, from recycling programs to renewable energy sources...' },
            { id: 4, title: '5 Surprising Facts About Our Company\'s History', description: 'Share lesser-known facts and anecdotes about the origins and evolution of your company...' },
            { id: 5, title: 'Behind the Scenes: A Day in the Life of Our Customer Support Team', description: 'Provide a glimpse into the daily operations of your customer support team and their dedication to customer satisfaction...' },
        ]);
    }, []);

    return (
        <BlogContainer>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <Post key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </Post>
            ))}
        </BlogContainer>
    );
};

export default BlogList;
