import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../../components/Filters/Filters';
import Sorting from '../../components/Sorting/Sorting';
import './FilterBar.scss';

const FilterBar = props => {
    const {sort_options, available_filters} = props.options;
    
    return (
        <div className="filters-bar">
            <Filters availableFilters={available_filters} />
            <Sorting sortOptions={sort_options} />
        </div>
    )
};

FilterBar.propTypes = {
    availableFilters: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        active: PropTypes.bool
    })),
    sortOptions: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string
    }))
};

export default FilterBar;