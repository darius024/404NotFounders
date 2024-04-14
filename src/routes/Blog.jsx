import React from 'react';
import Stats from '../helpers/Stats';
import BlogList from '../helpers/BlogList';
import Announcements from '../helpers/Announcements';
import { GlobalStyles, StatsContainer, BlogContainer, AnnouncementsContainer } from '../styles/BlogStyle';
import styled from 'styled-components';

const AppContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 10px;
gap: 20px;
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AppContainer>
				<Stats />
				<BlogList />
				<Announcements />
			</AppContainer>
		</>
	);
}

export default App;
