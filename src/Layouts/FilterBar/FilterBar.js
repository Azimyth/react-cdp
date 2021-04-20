import React from 'react';
import Filters from '../../components/Filters/Filters';
import Sorting from '../../components/Sorting/Sorting';
import './FilterBar.scss';

export default function FilterBar() {
    return (
        <div className="filters-bar">
            <Filters />
            <Sorting />
        </div>
    )
};