import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PieChart from '../images/PieChart.png';
import IncreaseInProfit from '../images/IncreaseInProfit.png';

const StatsContainer = styled.div`
background-color: #fff;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
padding: 10px;
margin: 10px;
width: 30%;
flex: 1 0 200px;
`;

const StatItem = styled.div`
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

const Stats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setStats([
            { id: 1, image: PieChart, text: 'Increase in Happiness', number: '10%' },
            { id: 2, image: IncreaseInProfit, text: 'Increase in Profit', number: '22.5%' },
        ]);
    }, []);

    return (
        <StatsContainer>
            <h2>Company Stats</h2>
            {stats.map(stat => (
                <StatItem key={stat.id}>
                    <img src={stat.image} alt="Stat" />
                    <div>
                    <p>{stat.text}</p>
                    <p>{stat.number}</p>
                    </div>
                </StatItem>
            ))}
        </StatsContainer>
    );
};

export default Stats;
