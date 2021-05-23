import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { showModal } from '../../store/actionCreators/toggleModal';
import Button from '../../components/Button/Button';
import SimpleSearch from '../../components/SimpleSearch/SimpleSearch';
import Sitelogo from '../../components/SiteLogo/Sitelogo';
import Container from '../../layouts/Container';
import './Header.scss';

const Header = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const toggleHandler = () => { dispatch(showModal('add')) }

    return (
        <header className="site-header">
            <Container>
                <Sitelogo />
                {
                    pathname.includes('film') ? <SimpleSearch /> :
                    pathname.includes('search') || pathname === '/'
                        ? <Button btnType="secondary" handler={toggleHandler}>+ Add Movie</Button>
                        : null
                }
            </Container>
        </header>
    )
};

export default Header;