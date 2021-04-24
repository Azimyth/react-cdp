import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterItem from './FilterItem';
import { filterMovies } from '../../store/actionCreators/filterMovie';
import './Filters.scss';

const Filters = () => {
    const [filterList, setFilterlist] = useState([
        {
            type: 'All',
            active: true
        },
        {
            type: 'Documentary',
            active: false
        },
        {
            type: 'Comedy',
            active: false
        },
        {
            type: 'Horror',
            active: false
        },
        {
            type: 'Crime',
            active: false
        },
        {
            type: 'Adventure',
            active: false
        },
        {
            type: 'Animation',
            active: false
        },
        {
            type: 'Family',
            active: false
        },
        {
            type: 'Fantasy',
            active: false
        },
        {
            type: 'Action',
            active: false
        },
        {
            type: 'Drama',
            active: false
        }
    ]);

    const endpointParams = useSelector(state => state.movies.endpointParams);
    const dispatch = useDispatch();

    const filterHandler = e => {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        setFilterlist(filterList.map(item => ({
            type: item.type,
            active: item.type == value
        })));
        dispatch(filterMovies({
            ...endpointParams,
            filter: (value === 'All') ? '' : value
        }))
    };

    return (
        <ul className="filters">
            {filterList.map((filter) => (
                <FilterItem
                    title={filter.type}
                    key={filter.type.toString()}
                    isActive={filter.active}
                    onclick={filterHandler}
                />
            ))}
        </ul>
    )
};

export default Filters;