import React from 'react';
import PropTypes from 'prop-types';
import MovieActionBubble from './MovieActionBubble/MovieActionBubble';
import './MovieCard.scss';
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';

const MovieCard = props => {
    const {poster, title, genres, publishDate, toggleHandler, id} = props;

    return (
        <article className="movie-card">
            <MoviePoster poster={poster} alt={title} />
            <div className="movie-card__content">
                <div className="movie-card__description">
                    <MovieTitle title={title}/>
                    <p className="movie-card__genres">{genres.join(', ')}</p>
                </div>
                <span className="movie-card__release-date">{publishDate.slice(0, 4)}</span>
            </div>
            <MovieActionBubble toggleHandler={toggleHandler} movieId={id} />
        </article>
    )
};

MovieCard.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    publishDate: PropTypes.string.isRequired,
    id: PropTypes.number,
    toggleHandler: PropTypes.func
};

export default MovieCard;