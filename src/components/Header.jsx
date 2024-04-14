import Navigation from './Navigation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../images/LogoCircle.png';

const SmallImage = styled.img`
  width: 70px;  /* Set a specific width */
  height: auto;  /* Maintain aspect ratio */
`;

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <SmallImage src={Logo} />
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;