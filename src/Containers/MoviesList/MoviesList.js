import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ toggleHandler }) => {
    const movies = useSelector(state => state.movies.movies);

    return (
        <section className="movies-list">
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                    toggleHandler={toggleHandler}
                />
            ))}
        </section>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string),
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number
    })),
    toggleHandler: PropTypes.func
};

export default MoviesList;