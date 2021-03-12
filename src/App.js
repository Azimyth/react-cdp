import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import ResultsCount from './components/ResultsCount/ResultsCount';
import MoviesList from './containers/MoviesList/MoviesList';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import MainContent from './layouts/Main';
import FilterBar from './containers/FilterBar/FilterBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import withMovieAction from './components/withMovieAction/withMovieAction';
import './App.scss';

import data from './MockData.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: data.movies,
            isOpenModal: false,
            modalContentType: null,
            movieId: null
        }
        this.modalHandler = this.toggleModal.bind(this)
    }

    toggleModal(contentType, movieId) {
        this.setState(state => ({
            isOpenModal: !state.isOpenModal,
            modalContentType: contentType,
            movieId: movieId
        }))
    }

    render() {
        const { count } = data;
        const Modal = withMovieAction(this.state.modalContentType, this.state.movieId);

        return (
            <>
                <Header toggleHandler={this.modalHandler} />
                <Hero />
                <MainContent>
                    <FilterBar options={data} />
                    <ResultsCount count={count} />
                    <ErrorBoundary>
                        <MoviesList 
                            movies={this.state.movies} 
                            toggleHandler={this.modalHandler}
                        />
                    </ErrorBoundary>
                </MainContent>
                <Footer />
                { this.state.isOpenModal && 
                    <Modal 
                        toggleHandler={this.modalHandler} 
                        movies={this.state.movies} 
                    />
                }
            </>
        )
    }
}

export default App;