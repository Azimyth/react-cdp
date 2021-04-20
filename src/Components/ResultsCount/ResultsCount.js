import React from 'react';
import { useSelector } from 'react-redux';
import './ResultsCount.scss';

const ResultsCount = () => {
    const count = useSelector(state => state.movies.totalAmount);

    return <span className="results-count"><strong>{count}</strong> movies found</span>
}

export default ResultsCount;