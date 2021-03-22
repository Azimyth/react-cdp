import React from 'react';
import Button from '../../components/Button/Button';
import SimpleSearch from '../../components/SimpleSearch/SimpleSearch';
import Sitelogo from '../../components/SiteLogo/Sitelogo';
import Container from '../Container';
import './Header.scss';

const Header = ({ flag, toggleHandler }) => (
    <header className="site-header">
        <Container>
            <Sitelogo />
            { flag 
                ? <Button btnType="secondary" handler={() => toggleHandler('add')}>
                + Add Movie
                </Button>
                : <SimpleSearch />
            }
        </Container>
    </header>
);

export default Header;