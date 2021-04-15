import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies, toggleHandler }) => {
    return (
        <section className="movies-list">
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id}
                    toggleHandler={toggleHandler}
                    movie={movie}
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