import React from 'react';
import AddMovie from '../../Components/AddMovie/AddMovie';
import Sitelogo from '../../Components/SiteLogo/Sitelogo';
import Container from '../Container';
import './Header.scss';

const Header = () => (
    <header className="site-header">
        <Container>
            <Sitelogo />
            <AddMovie />
        </Container>
    </header>
);

export default Header;