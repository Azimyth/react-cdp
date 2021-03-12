import React from 'react';
import Sitelogo from '../../components/SiteLogo/Sitelogo';
import Container from '../Container';
import './Footer.scss';

const Footer = () => (
    <footer className="site-footer">
        <Container>
            <Sitelogo />
        </Container>
    </footer>
);

export default Footer;