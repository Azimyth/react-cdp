import React from 'react';
import Filters from '../../Components/Filters/Filters';
import Sorting from '../../Components/Sorting/Sorting';
import './FilterBar.scss';

const availableFilters = [
    {
        title: 'All',
        active: true
    },
    {
        title: 'documentary',
        active: false
    },
    {
        title: 'comedy',
        active: false
    },
    {
        title: 'horror',
        active: false
    },
    {
        title: 'crime',
        active: false
    }
];
const sortOptions = [
    {
        value: 'Alphabetical A-Z',
        order: 'Ascending',
    },
    {
        value: 'Alphabetical Z-A',
        order: 'Descending',
    },
    {
        value: 'Release Date',
        order: 'Descending',
    }
];

const FilterBar = () => (
    <div className="filters-bar">
        <Filters availableFilters={availableFilters} />
        <Sorting sortOptions={sortOptions} />
    </div>
);

export default FilterBar;