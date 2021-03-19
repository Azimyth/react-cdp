import React from 'react';
import PropTypes from 'prop-types';

const MovieTitle = props => (
    <h3 className="movie-title">{props.title}</h3>
)

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default MovieTitle;