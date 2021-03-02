import React from 'react';
import Container from './Container';

const MainContent = props => (
    <Container>
        {props.children}
    </Container>
)

export default MainContent;