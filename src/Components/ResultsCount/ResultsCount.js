import React from 'react';
import PropTypes from 'prop-types';
import './ResultsCount.scss';

const ResultsCount = ({ count }) => (
    <span className="results-count"><strong>{count}</strong> movies found</span>
)

ResultsCount.propTypes = {
    count: PropTypes.number
}

export default ResultsCount;