import React from 'react';
import Filters from '../../Components/Filters/Filters';
import Sorting from '../../Components/Sorting/Sorting';
import data from '../../MockData.json';
import './FilterBar.scss';

const FilterBar = () => {
    const {sort_options, available_filters} = data;
    
    return (
        <div className="filters-bar">
            <Filters availableFilters={available_filters} />
            <Sorting sortOptions={sort_options} />
        </div>
    )
};

export default FilterBar;