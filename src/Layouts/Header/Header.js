import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../store/actionCreators/toggleModal';
import Button from '../../components/Button/Button';
import SimpleSearch from '../../components/SimpleSearch/SimpleSearch';
import Sitelogo from '../../components/SiteLogo/Sitelogo';
import Container from '../Container';
import './Header.scss';

const Header = ({ flag }) => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(showModal('add'))
    }

    return (
        <header className="site-header">
            <Container>
                <Sitelogo />
                { flag 
                    ? <Button btnType="secondary" handler={toggleHandler}>
                    + Add Movie
                    </Button>
                    : <SimpleSearch />
                }
            </Container>
        </header>
    )
};

export default Header;