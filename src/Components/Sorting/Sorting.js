import React from 'react';
import SortItem from './SortItem';
import PropTypes from 'prop-types';
import './Sorting.scss';

const Sorting = props => (
    <label className="sorting">
        Sort by
        <span className="sorting-box">
            <select>
                {props.sortOptions.map(item => (
                    <SortItem value={item.value} order={item.order} key={item.value}/>
                ))}
            </select>
        </span>
    </label>
);

Sorting.propTypes = {
    sortOptions: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        order: PropTypes.string
    }))
};

export default Sorting;