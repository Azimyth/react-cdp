import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ResultsCount from './components/ResultsCount/ResultsCount';
import MoviesList from './containers/MoviesList/MoviesList';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import MainContent from './layouts/Main';
import FilterBar from './containers/FilterBar/FilterBar';
import MovieDetais from './components/MovieDetails/MovieDetails';
import withMovieAction from './components/withMovieAction/withMovieAction';
import { useToggle } from './hooks/useToggle';

import data from './MockData.json';

const App = () => {
    const {movies, count} = data;

    //Adding this to show movie details page
    const isHomePage = false;
    const MOVIE_DETAILS_INDEX = 2;

    const [isOpenModal, toggleModal] = useToggle(false);
    const [modalContent, setModalContent] = useState({
        type: '',
        id: null
    });

    const modalContentHandler = (type, id = null) => {
        setModalContent({ type, id});
        toggleModal();
    };

    const Modal = withMovieAction(modalContent.type, modalContent.id);

    return (
        <>
            <Header toggleHandler={modalContentHandler} flag={isHomePage} />
            { isHomePage ? <Hero /> : <MovieDetais movie={movies[MOVIE_DETAILS_INDEX]}/> }
            <MainContent>
                <FilterBar options={data} />
                <ResultsCount count={count} />
                <ErrorBoundary>
                    <MoviesList 
                        movies={movies}
                        toggleHandler={modalContentHandler}
                    />
                </ErrorBoundary>
            </MainContent>
            <Footer />
            { isOpenModal && 
                <Modal 
                    showModal={isOpenModal}
                    toggleHandler={modalContentHandler}
                    movies={movies}
                />
            }
        </>
    )
}

export default App;