import React from 'react';
import FilterItem from './FilterItem';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = (props) => (
    <ul className="filters">
        {props.availableFilters.map((filter) => (
            <FilterItem 
                title={filter.title}
                key={filter.title.toString()}
                isActive={filter.active}
            />
        ))}
    </ul>
)

Filters.propTypes = {
    availableFilters: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        active: PropTypes.bool
    }))
};

export default Filters;