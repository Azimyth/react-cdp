import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = props => (
    <article className="movie-card">
        <img className="movie-card__poster" src={props.poster} />
        <div className="movie-card__content">
            <div className="movie-card__description">
                <h3 className="movie-card__title">{props.title}</h3>
                <p className="movie-card__genres">{props.genres.join(', ')}</p>
            </div>
            <span className="movie-card__release-date">{props.publishDate.slice(0, 4)}</span>
        </div>
    </article>
);

MovieCard.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    publishDate: PropTypes.string.isRequired
};

export default MovieCard;