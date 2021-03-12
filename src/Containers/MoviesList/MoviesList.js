import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = props => {
    const { movies, toggleHandler } = props;

    if (!movies) {
        throw new Error('Data is missing!!!');
    }

    return (
        <section className="movies-list">
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    genres={movie.genres}
                    publishDate={movie.release_date}
                    toggleHandler={toggleHandler}
                    id={movie.id}
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