import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import './Filters.scss';

const Filters = ({ availableFilters }) => (
    <ul className="filters">
        {availableFilters.map((filter) => (
            <FilterItem
                title={filter.title}
                key={filter.title.toString()}
                isActive={filter.active}
            />
        ))}
    </ul>
);

Filters.propTypes = {
    availableFilters: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        active: PropTypes.bool
    }))
};

export default Filters;