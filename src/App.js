import React from 'react';
import Hero from './Components/Hero/Hero';
import ResultsCount from './Components/ResultsCount/ResultsCount';
import MoviesList from './Containers/MoviesList/MoviesList';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import MainContent from './Layouts/Main';
import './App.scss';
import FilterBar from './Containers/FilterBar/FilterBar';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

const App = () => (
    <>
        <Header />
        <Hero />
        <MainContent>
            <FilterBar />
            <ResultsCount />
            <ErrorBoundary>
                <MoviesList />
            </ErrorBoundary>
        </MainContent>
        <Footer />
    </>
);

export default App;