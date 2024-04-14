import { menuItemsData } from "../data";
import MenuItems from './MenuItems';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Award from '../images/AwardCircle.png';

const SmallImage = styled.img`
  width: 30px;  /* Set a specific width */
  height: auto;  /* Maintain aspect ratio */
`;

const Navigation = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/leaderboard');  // Change '/awards' to your desired route
    };

    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {menuItemsData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />
                })}
                <li onClick={handleImageClick}>
                    <SmallImage src={Award} />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;