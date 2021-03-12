import React from 'react';
import Button from '../../components/Button/Button';
import Sitelogo from '../../components/SiteLogo/Sitelogo';
import Container from '../Container';
import './Header.scss';

const Header = props => (
    <header className="site-header">
        <Container>
            <Sitelogo />
            <Button 
                label="+ Add Movie" 
                btnType="secondary" 
                handler={() => props.toggleHandler('add')} 
            />
        </Container>
    </header>
);

export default Header;