import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Sorting.scss';
import { sortMovies } from '../../store/actionCreators/sortMovie'

const Sorting = () => {
    const sortOptions = [
        {
            title: 'Release Date',
            value: 'release_date',
            order: 'desc'
        },
        {
            title: 'Release Date',
            value: 'release_date',
            order: 'asc'
        },
        {
            title: 'Rating',
            value: 'vote_average',
            order: 'desc'
        },
        {
            title: 'Rating',
            value: 'vote_average',
            order: 'asc'
        },
    ];

    const dispatch = useDispatch();
    const endpointParams = useSelector(state => state.movies.endpointParams);
    const sortHandler = e => {
        dispatch(sortMovies({
            ...endpointParams,
            sortBy: e.target.value,
            sortOrder: e.target.selectedOptions[0].getAttribute('order'),
        }))
    }

    return (
        <label className="sorting">
            Sort by
            <span className="drop-box">
                <select onChange={sortHandler}>
                    {sortOptions.map((item, i) => {
                        return <option key={`option-${i}`} value={item.value} order={item.order}>{item.title}</option>
                    })}
                </select>
            </span>
        </label>
    )
};

export default Sorting;