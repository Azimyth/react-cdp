import React from 'react';
import Search from '../Search/Search';
import background from '../../assets/hero-full.jpg';
import Container from '../../Layouts/Container';
import './Hero.scss';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

const Hero = () => (
    <section className="hero-full">
        <BackgroundImage src={background} altText="Hero background"/>
        <Container>
            <h1 className="hero-title">Find your movie</h1>
            <Search />
        </Container>
    </section>
);

export default Hero;