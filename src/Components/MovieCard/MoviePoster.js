import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = props => (
    <img className="movie-poster" src={props.poster} alt={props.alt} />
)

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default MoviePoster;