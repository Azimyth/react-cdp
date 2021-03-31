import React from 'react';
import './ResultsCount.scss';
import data from '../../MockData.json';

const ResultsCount = () => <span className="results-count"><strong>{data.count}</strong> movies found</span>

export default ResultsCount;