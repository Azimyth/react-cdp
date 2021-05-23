import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ResultsCount from '../components/ResultsCount/ResultsCount';
import MoviesList from '../containers/MovieList/MoviesList';
import FilterBar from '../layouts/FilterBar/FilterBar';
import MainContent from '../layouts/Main';
import { TopContainer } from '../containers/MoviesList/TopContainer/TopContainer';

export default () => {
    return (
        <>
            <TopContainer />
            <MainContent>
                <FilterBar />
                <ResultsCount />
                <ErrorBoundary>
                    <MoviesList />
                </ErrorBoundary>
            </MainContent>
        </>
    )
}