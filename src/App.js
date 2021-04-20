import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from './store/actionCreators/getInitialData';

import Hero from './components/Hero/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ResultsCount from './components/ResultsCount/ResultsCount';
import MoviesList from './containers/MoviesList/MoviesList';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import MainContent from './layouts/Main';
import FilterBar from './layouts/FilterBar/FilterBar';
import MovieDetais from './components/MovieDetails/MovieDetails';
import ModalContentManager from './components/ModalContentManager/ModalContentManager';

const App = () => {
    const dispatch = useDispatch();
    const endpointParams = useSelector(state => state.movies.endpointParams);

    //Adding this to show movie details page
    const isHomePage = true;
    const MOVIE_DETAILS_INDEX = 2;

    useEffect(() => {
        dispatch(getInitialData(endpointParams));
    }, []);

    return (
        <>
            <Header flag={isHomePage} />
            { isHomePage ? <Hero /> : <MovieDetais movie={movies[MOVIE_DETAILS_INDEX]}/> }
            <MainContent>
                <FilterBar />
                <ResultsCount />
                <ErrorBoundary>
                    <MoviesList />
                </ErrorBoundary>
            </MainContent>
            <Footer />
            <ModalContentManager />
        </>
    )
}

export default App;