import React from 'react';
import PropTypes from 'prop-types';

const MovieTitle = ({ title }) => (
    <h3 className="movie-title">{title}</h3>
)

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default MovieTitle;